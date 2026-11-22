import type { Db, Document } from 'mongodb';

const references = [
  ['genericId', 'generics', 'genericName'],
  ['manufacturerId', 'manufacturers', 'manufacturerName'],
  ['dosageFormId', 'dosage_forms', 'dosageForm'],
] as const;

export const medicineReferenceProjection = { genericId: 1, manufacturerId: 1, dosageFormId: 1 };

export const medicineReferenceStages: Document[] = references.flatMap(([id, collection, label]) => [
  { $lookup: { from: collection, localField: id, foreignField: '_id', as: '_reference' } },
  { $set: { [label]: { $ifNull: [{ $first: '$_reference.name' }, null] } } },
  { $unset: '_reference' },
]);

export async function medicineSearchFields(db: Db, pattern: string): Promise<Document[]> {
  const match = { $regex: pattern, $options: 'i' };
  const linked = await Promise.all(references.map(async ([id, collection]) => ({
    [id]: { $in: await db.collection(collection).distinct('_id', collection === 'dosage_forms'
      ? { $or: [{ name: match }, { sourceLabels: match }] } : { $or: [{ name: match }, { aliases: match }] }) },
  })));
  return [...['nameKey', 'name', 'nameBn', 'strength'].map(field => ({ [field]: match })), ...linked];
}

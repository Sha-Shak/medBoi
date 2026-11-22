const medicineCollections = new Set(['medicines', 'generics', 'manufacturers', 'dosage_forms']);

export function catalogueDestination(collection?: string) {
  if (!collection || process.env.MONGODB_CATALOGUE_SPLIT !== 'true') return undefined;
  const medicineUri = process.env.MONGODB_HEALTHCARE_MEDICINE_URI?.trim();
  const directoryUri = process.env.MONGODB_HEALTHCARE_DIRECTORY_URI?.trim();
  if (!medicineUri || !directoryUri) throw new Error('Both healthcare database connections are required.');
  return medicineCollections.has(collection)
    ? { uri: medicineUri, name: 'healthcare_medicines' }
    : { uri: directoryUri, name: 'healthcare_directory' };
}

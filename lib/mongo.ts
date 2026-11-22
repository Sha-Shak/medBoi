import { catalogueDestination } from '../../shared/catalogue-destination';
import { MongoClient, MongoNotConnectedError, MongoTopologyClosedError, type Db } from 'mongodb';

const state = globalThis as typeof globalThis & { medBoiPublicConnections?: Map<string, Promise<MongoClient>> };

function connection(uri: string | undefined) {
  if (!uri) throw new Error('Catalogue connection is unavailable.');
  const connections = state.medBoiPublicConnections ??= new Map<string, Promise<MongoClient>>();
  const existing = connections.get(uri);
  if (existing) return existing;
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 6500,
    maxPoolSize: 12,
    readPreference: 'primaryPreferred',
    maxStalenessSeconds: 120,
  });
  const pending = client.connect().catch(async error => {
    if (connections.get(uri) === pending) connections.delete(uri);
    await client.close().catch(() => undefined);
    throw error;
  });
  connections.set(uri, pending);
  return pending;
}

export async function readCatalogue<T>(collection: string, read: (db: Db) => Promise<T>): Promise<T> {
  const destination = catalogueDestination(collection);
  const uri = destination?.uri ?? process.env.MONGODB_URI;
  if (!uri) throw new Error('Catalogue connection is unavailable.');
  const dbName = destination?.name ?? (process.env.MONGODB_DATABASE || 'medicine_catalog_prod');
  for (let attempt = 0; ; attempt++) {
    const pending = connection(uri);
    try {
      return await read((await pending).db(dbName));
    } catch (error) {
      if (!(error instanceof MongoTopologyClosedError || error instanceof MongoNotConnectedError)) throw error;
      // Another read may already have opened a replacement pool.
      if (state.medBoiPublicConnections?.get(uri) === pending) {
        state.medBoiPublicConnections?.delete(uri);
        void pending.then(client => client.close()).catch(() => undefined);
      }
      if (attempt > 0) throw error;
    }
  }
}

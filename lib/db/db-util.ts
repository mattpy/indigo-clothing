import { MongoClient, Collection } from 'mongodb';

let cached: { conn: null | MongoClient } = { conn: null };

async function connectDB(): Promise<MongoClient> {
  if (cached.conn) {
    return cached.conn;
  }

  cached.conn = await MongoClient.connect(process.env.MONGODB_URI);
  return cached.conn;
}

async function getCollection(collection): Promise<Collection> {
  const client: MongoClient = await connectDB();
  return client.db().collection(collection);
}

function serializeFields(data): void {
  if (data.length) {
    for (const item of data) {
      serialize(item);
    }
  } else {
    serialize(data);
  }
}

function serialize(item): void {
  if (item._id) {
    item._id = item._id.toString();
  }
  if (item.user) {
    item.user = item.user.toString();
  }
  if (item.product) {
    item.product = item.product.toString();
  }
  if (item.price) {
    item.price = parseFloat(item.price);
  }
}

export { connectDB, getCollection, serializeFields };

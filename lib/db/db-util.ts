import { MongoClient } from 'mongodb';

// import '../db/models/Product';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  cached.conn = await MongoClient.connect(process.env.MONGODB_URI);
  return cached.conn;
}

function serializeFields(items) {
  for (const item of items) {
    if (item._id) {
      item._id = item._id.toString();
    }
    if (item.price) {
      item.price = item.price.toString();
    }
  }
}

export { connectDB, serializeFields };

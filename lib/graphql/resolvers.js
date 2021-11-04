import { ObjectId } from 'mongodb';

const resolvers = {
  Query: {
    products(parent, { title, cart }, { client }, info) {
      if (title) {
        return client
          .db()
          .collection('products')
          .find({ title: { $regex: title, $options: 'i' } })
          .limit(5)
          .toArray();
      }
      if (cart) {
        return client
          .db()
          .collection('products')
          .find({ _id: { $in: cart.map(item => new ObjectId(item)) } })
          .toArray();
      }
      return client
        .db()
        .collection('products')
        .find()
        .limit(5)
        .sort({ _id: -1 })
        .toArray();
    }
  },
  Product: {
    price(parent, args, ctx, info) {
      return parseFloat(parent.price);
    }
  }
};

export default resolvers;

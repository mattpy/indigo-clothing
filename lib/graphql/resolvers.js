const resolvers = {
  Query: {
    products(parent, args, { db }, info) {
      return db.models.Product.find().exec();
    }
  }
};

export default resolvers;

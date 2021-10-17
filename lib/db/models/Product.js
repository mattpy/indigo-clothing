import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  images: { type: [String], required: true },
  type: { type: String, required: true },
  color: { type: String, required: true }
});

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);

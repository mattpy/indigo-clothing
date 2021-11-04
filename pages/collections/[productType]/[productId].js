import { ObjectId } from 'mongodb';

import Product from '../../../components/product/product/product';
import { getCollection, serializeFields } from '../../../lib/db/db-util';

function ProductPage(props) {
  if (props.error) {
    return <div>{props.error}</div>;
  }

  return (
    <Product
      product={props.product}
      sellingFast={props.sellingFast}
      reviews={props.reviews}
    />
  );
}

export async function getServerSideProps({ params }) {
  const product = await getProduct(params);
  const reviews = await getReviews(params);
  const sellingFast = await getSellingFast();

  return { props: { product, reviews, sellingFast } };
}

async function getProduct({ productId }) {
  const products = await getCollection('products');

  let _id;
  try {
    _id = new ObjectId(productId);
  } catch (error) {
    return { notFound: true };
  }

  let product;
  try {
    product = await products.findOne({ _id });
  } catch (error) {
    return { props: { error: 'Failed to load product data.' } };
  }

  if (!product) {
    return { notFound: true };
  }
  serializeFields(product);

  return product;
}

async function getReviews({ productId }) {
  const reviewsCollection = await getCollection('reviews');

  const reviews = await reviewsCollection
    .find({ product: new ObjectId(productId) })
    .toArray();
  serializeFields(reviews);

  return reviews;
}

async function getSellingFast() {
  const productCollection = await getCollection('products');

  const sellingFast = await productCollection
    .aggregate([{ $sample: { size: 4 } }])
    .sort({ _id: -1 })
    .toArray();
  serializeFields(sellingFast);

  return sellingFast;
}

export default ProductPage;

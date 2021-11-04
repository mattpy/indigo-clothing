import { Document } from 'mongodb';

import Collection from '../../../components/collection/collection';
import { getCollection, serializeFields } from '../../../lib/db/db-util';

function ProductTypePage(props): JSX.Element {
  return <Collection collection={props.products} />;
}

export async function getStaticPaths(): Promise<{
  paths: { params: { productType: string } }[];
  fallback: boolean;
}> {
  const productsCollection = await getCollection('products');
  const productTypes = await productsCollection.distinct('type');
  const paths = productTypes.map(type => ({
    params: { productType: type.toLowerCase() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params
}): Promise<{ props: { products: Document[] } }> {
  const { productType } = params;

  const productsCollection = await getCollection('products');

  const products = await productsCollection
    .find({ type: productType.toUpperCase() })
    .toArray();
  serializeFields(products);

  return { props: { products } };
}

export default ProductTypePage;

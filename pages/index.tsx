import Hero from '../components/home/hero/hero';
import ItemSet from '../components/home/item-set/item-set/item-set';
import { getCollection, serializeFields } from '../lib/db/db-util';

function HomePage(props): JSX.Element {
  return (
    <>
      <Hero items={props.hero1} />
      <ItemSet products={props.itemSet1} />
      <Hero items={props.hero2} />
      <ItemSet products={props.itemSet2} />
    </>
  );
}

export async function getStaticProps() {
  const hero1Collection = await getCollection('hero-1');
  const hero1Products = await hero1Collection.find().toArray();
  serializeFields(hero1Products);

  const hero2Collection = await getCollection('hero-2');
  const hero2Products = await hero2Collection.find().toArray();
  serializeFields(hero2Products);

  const productsCollection = await getCollection('products');
  const products = await productsCollection
    .aggregate([{ $sample: { size: 6 } }])
    .toArray();

  serializeFields(products);

  return {
    props: {
      hero1: hero1Products,
      hero2: hero2Products,
      itemSet1: products.slice(0, 3),
      itemSet2: products.slice(3)
    },
    revalidate: 86400
  };
}

export default HomePage;

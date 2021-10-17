import Hero from '../components/home/hero/hero';
import ItemSet from '../components/home/item-set/item-set/item-set';
import { connectDB, serializeFields } from '../lib/db/db-util';

function HomePage(props): JSX.Element {
  return (
    <>
      <Hero items={props.hero1} />
      <ItemSet products={props.products} />
      <Hero items={props.hero2} />
      <ItemSet products={props.products} />
    </>
  );
}

export async function getStaticProps() {
  const client = await connectDB();

  const hero1 = await client.db().collection('hero-1').find().toArray();
  serializeFields(hero1);

  const hero2 = await client.db().collection('hero-2').find().toArray();
  serializeFields(hero2);

  const products = await client.db().collection('products').find().toArray();
  serializeFields(products);

  return { props: { hero1, hero2, products }, revalidate: 86400 };
}

export default HomePage;

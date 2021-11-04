import Item from '../../home/item-set/item/item';
import { Product } from '../product/product';
import classes from './product-set.module.scss';

interface Props {
  title: string;
  items: Product[];
}

function ProductSet({ title, items }: Props) {
  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      <div className={classes.group}>
        {items.map(item => {
          return <Item key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductSet;

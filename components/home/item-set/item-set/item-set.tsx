import Fade from 'react-reveal/Fade';

import Item from '../item/item';
import classes from './item-set.module.scss';

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  images: string[];
};

interface Props {
  products: Product[];
}

function ItemSet(props: Props) {
  return (
    <Fade>
      <div className={classes.container}>
        {props.products.map(product => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </Fade>
  );
}

export default ItemSet;

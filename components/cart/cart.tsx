import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { useQuery, gql } from '@apollo/client';

import Spinner from './spinner/spinner';
import CartItems from './cart-items/cart-items';
import { StoreContext } from '../../lib/context/context';
import classes from './cart.module.scss';

export interface CartItem {
  product: string;
  quantity: string;
}

interface Props {
  closeCart?(): void;
}

const PRODUCTS = gql`
  query GetCartByIds($title: String, $cart: [String!]) {
    products(title: $title, cart: $cart) {
      _id
      title
      price
      images
      color
    }
  }
`;

function Cart(props: Props) {
  const { cart } = useContext(StoreContext);

  const { loading, error, data } = useQuery(PRODUCTS, {
    variables: { cart: cart.map(item => item.product) }
  });

  const content = (
    <>
      <div className={classes.wrapper} onClick={props.closeCart} />
      <div className={classes.container}>
        {loading ? <Spinner /> : <CartItems items={data.products} closeCart={props.closeCart} />}
      </div>
    </>
  );
  return createPortal(content, document.querySelector('#cart'));
}

export default Cart;

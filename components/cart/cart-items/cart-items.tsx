import { useContext } from 'react';

import { Product } from '../../product/product/product';
import { StoreContext } from '../../../lib/context/context';
import CartItem from './cart-item/cart-item';
import classes from './cart-items.module.scss';

interface Props {
  items: Product[];
  closeCart(): void;
}

function CartItems({ items, closeCart }: Props): JSX.Element {
  const { cart } = useContext(StoreContext);

  let content;

  if (items.length) {
    content = items.map(item => (
      <CartItem closeCart={closeCart} key={item._id} item={item} />
    ));
  } else {
    content = (
      <div className={classes.noItems}>
        Your cart is empty. Try adding some items!
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Your Cart</h2>
        <button onClick={closeCart}>X</button>
      </div>
      {content}
      <div className={classes.price}>
        Total: $
        <span>
          {items.reduce((acc, curr) => {
            const cartItem = cart.find(item => item.product === curr._id);
            return (acc += +(+cartItem.quantity * curr.price).toFixed(2));
          }, 0)}
        </span>
        <div className={classes.checkout}>
          <button disabled>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

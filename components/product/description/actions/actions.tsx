import Image from 'next/image';

import { Product } from '../../product/product';
import { CartItem } from '../../../cart/cart';
import classes from './actions.module.scss';

interface IProps {
  cart: CartItem[];
  product: Product;
  updateCart(): void;
  removeFromCart(): void;
}

function ItemInCart({ updateCart, removeFromCart }) {
  return (
    <div className={classes.removeItem}>
      <button className={classes.addToCart} onClick={updateCart}>
        Update Cart
      </button>
      <button className={classes.addToCart} onClick={removeFromCart}>
        X
      </button>
    </div>
  );
}

function Actions({ cart, product, updateCart, removeFromCart }: IProps) {
  const productInCart = cart?.find(item => item.product === product._id);

  return (
    <div className={classes.container}>
      {productInCart ? (
        <ItemInCart updateCart={updateCart} removeFromCart={removeFromCart} />
      ) : (
        <button className={classes.addToCart} onClick={updateCart}>
          <span>Add To Cart</span>
        </button>
      )}
      <button className={classes.wishlist} disabled>
        <span>
          Wishlist{' '}
          <Image
            src='/images/nav/wishlist.png'
            height={12}
            width={12}
            alt='Wishlist icon'
          />
        </span>
      </button>
    </div>
  );
}

export default Actions;

import { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Product } from '../../../product/product/product';
import { StoreContext } from '../../../../lib/context/context';
import Quantity from '../../../product/description/quantity/quantity';
import classes from './cart-item.module.scss';

function CartItem({
  item,
  closeCart
}: {
  item: Product;
  closeCart(): void;
}): JSX.Element {
  const { cart, setCart } = useContext(StoreContext);
  const router = useRouter();

  const { quantity } = cart.find(
    cartItem => cartItem.product === item._id.toString()
  );
  const [stateQuantity, setStateQuantity] = useState(quantity);

  function changeQuantityHandler(quantity: number) {
    if (!quantity) {
      setStateQuantity('');
    } else {
      setStateQuantity(quantity.toString());
    }
  }

  function handleLink() {
    closeCart();
    router.push(`/collections/products/${item._id}`);
  }

  function updateCart() {
    setCart(item._id, stateQuantity);
  }

  function deleteItem() {
    setCart(item._id, '0');
  }

  return (
    <>
      <div className={classes.container}>
        <Image
          src={item.images[0]}
          width={60}
          height={75}
          alt={item.title}
          onClick={handleLink}
        />
        <div className={classes.description} onClick={handleLink}>
          <div>{item.title}</div>
          <div>${item.price}</div>
        </div>
        <div className={classes.quantity}>
          <Quantity
            changeQuantity={changeQuantityHandler}
            quantity={stateQuantity}
          />
          {quantity !== stateQuantity && (
            <div className={classes.updateCart} onClick={updateCart}>
              Update
            </div>
          )}
        </div>
        <div className={classes.closeBtn} onClick={deleteItem}>
          X
        </div>
      </div>
      <div className={classes.bottomBorder} />
    </>
  );
}

export default CartItem;

import { useEffect, useState } from 'react';
import { useContext } from 'react';

import { StoreContext } from '../../../lib/context/context';
import Rating from './rating/rating';
import Quantity from './quantity/quantity';
import Actions from './actions/actions';
import GiftWrapping from './gift-wrapping/gift-wrapping';
import Icons from './icons/icons';
import Reviews from './reviews/reviews';
import classes from './description.module.scss';
import { Product, Review } from '../product/product';

interface Props {
  product: Product;
  reviews: Review[];
}

function Description({ product, reviews }: Props) {
  const { cart, setCart } = useContext(StoreContext);
  const cartProduct = cart?.find(item => item.product === product._id);
  const [quantity, setQuantity] = useState(cartProduct?.quantity ?? '1');
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const header: HTMLElement = document.querySelector('#navbar-header');
    header.style.boxShadow = '0 0 1px rgb(0 0 0 / 20%)';

    return () => {
      header.style.boxShadow = 'revert';
    };
  }, []);

  useEffect(() => {
    setQuantity(cartProduct?.quantity ?? '1');
  }, [cartProduct]);

  function changeQuantityHandler(quantity: number) {
    if (!quantity) {
      setQuantity('');
    } else {
      setQuantity(quantity.toString());
    }
  }

  function handleShowReviews() {
    setShowReviews(!showReviews);
  }

  function updateCart() {
    setCart(product._id, quantity);
  }

  function removeFromCart() {
    setCart(product._id, '0');
  }

  const date = new Date();
  date.setDate(date.getDate() + 7);
  const shipDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const timeOrderBy = `${date.getHours() - 3} hours and ${
    date.getMinutes() % 60
  } minutes.`;

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{product.title}</h1>
      </div>
      <div className={classes.price}>${product.price}</div>
      <Rating horizontal button handleShowReviews={handleShowReviews} />
      <div className={classes.financing}>
        Financing is available. Pay in 6 easy installments of $
        {(product.price / 6).toFixed(2)}
      </div>
      <hr />
      <div className={classes.shipping}>
        <span className={classes.shippingLeft}>Want it {shipDate}?</span>{' '}
        <span className={classes.shippingRight}>
          Order within <span className={classes.timeframe}>{timeOrderBy}</span>
        </span>
      </div>
      <Quantity quantity={quantity} changeQuantity={changeQuantityHandler} />
      <Actions
        updateCart={updateCart}
        removeFromCart={removeFromCart}
        product={product}
        cart={cart}
      />
      <GiftWrapping />
      <hr />
      <Icons />
      <Reviews
        reviews={reviews}
        showReviews={showReviews}
        handleShowReviews={handleShowReviews}
      />
    </div>
  );
}

export default Description;

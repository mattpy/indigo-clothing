import { useEffect, useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import Rating from '../../../product/description/rating/rating';

import OutOfStock from '../../../ui/out-of-stock/out-of-stock';
import classes from './item.module.scss';

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  images: string[];
  type: string;
  color: string;
};

interface Props {
  product: Product;
}

let interval;

function Item({ product }: Props) {
  const [image, setImage] = useState(product.images[0]);

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  function changeImage(event) {
    if (product.images.length < 2) return;

    let counter = 0;

    if (event.type === 'mouseenter') {
      interval = setInterval(() => {
        counter++;
        if (counter >= 2) {
          counter = 0;
        }
        setImage(product.images[counter]);
      }, 1000);
      setImage(product.images[++counter]);
    } else {
      setImage(product.images[0]);
      clearInterval(interval);
    }
  }

  return (
    <div className={classes.container}>
      <Link href={`/collections/products/${product._id}`}>
        <a>
          <div className={classes.wrapper}>
            <div
              className={classes.image}
              onMouseEnter={changeImage}
              onMouseLeave={changeImage}
            >
              <NextImage
                src={image}
                alt={product.title}
                height={720}
                width={540}
                layout='responsive'
              />
            </div>
            <div className={classes.title}>{product.title}</div>
            <div className={classes.price}>${product.price}</div>
            <div className={classes.bookmark}>{'<3'}</div>
            {product.quantity === 0 && <OutOfStock />}
          </div>
          <div className={classes.rating}>
            <Rating
              fontSize='0.625rem'
              size={16}
              handleShowReviews={() => {}}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Item;

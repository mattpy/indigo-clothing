import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './item.module.scss';

type Product = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  images: string[];
};

interface Props {
  product: Product;
}

let interval;

function Item({ product }: Props) {
  const [image, setImage] = useState(product.images[0]);

  function changeImage(event) {
    let counter = 0;

    if (event.type === 'mouseenter') {
      interval = setInterval(() => {
        counter++;
        if (counter >= product.images.length) {
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
      <Link href={`/collections/home/${product._id}`}>
        <a>
          <div className={classes.wrapper}>
            <div
              className={classes.image}
              onMouseEnter={changeImage}
              onMouseLeave={changeImage}
            >
              <Image
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
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Item;

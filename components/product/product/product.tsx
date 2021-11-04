import { useEffect, useState } from 'react';

import Photos from '../photos/photos';
import MainPhoto from '../main-photo/main-photo';
import Description from '../description/description';
import ProductSet from '../product-set/product-set';
import { useRecentlyViewed } from '../../../lib/hooks/hooks';
import classes from './product.module.scss';

export interface Review {
  _id: string;
  product: string;
  text: string;
  user: string;
}

export interface Product {
  _id: string;
  title: string;
  images: string[];
  price: number;
  quantity: number;
  color: string;
  type: string;
}

interface Props {
  product: Product;
  reviews: Review[];
  sellingFast: Product[];
}

function Product({ product, reviews, sellingFast }: Props): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [items, setRecentlyViewed] = useRecentlyViewed();

  useEffect(() => {
    setRecentlyViewed(product);
    setSelectedImage(product.images[0]);
  }, [product]);

  function onChangeImage(image) {
    setSelectedImage(image);
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Photos
          selectedImage={selectedImage}
          images={product.images}
          onChangeImage={onChangeImage}
        />
        {selectedImage && (
          <MainPhoto title={product.title} image={selectedImage} />
        )}
        <Description product={product} reviews={reviews} />
      </div>
      <ProductSet title='Selling Fast' items={sellingFast} />
      <ProductSet title='Recently Viewed' items={items} />
    </div>
  );
}

export default Product;

import Image from 'next/image';

import classes from './gift-wrapping.module.scss';

function GiftWrapping() {
  return (
    <div className={classes.container}>
      <Image
        src='/images/product/gift-wrapping.jpg'
        height={110}
        width={110}
        alt='Gift wrapping'
      />
      <div className={classes.text}>
        <h5>Gift Wrapping!</h5>
        <div>Purchases over $100 are eligible for free gift wrapping!</div>
      </div>
    </div>
  );
}

export default GiftWrapping;

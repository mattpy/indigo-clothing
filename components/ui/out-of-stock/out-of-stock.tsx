import Image from 'next/image';

import classes from './out-of-stock.module.scss';

function OutOfStock(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Image
          src='https://indigo-clothing-company.s3.amazonaws.com/misc/sold-out.png'
          height={110}
          width={110}
          alt='Sold out'
        />
      </div>
    </div>
  );
}

export default OutOfStock;

import Image from 'next/image';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

import classes from './footer-item.module.scss';

function FooterItem(props) {
  return (
    <div className={classes.container}>
      <button onClick={scroll.scrollToTop}>
        <Image
          src='/images/nav/up-arrow.png'
          alt='Up arrow'
          height={20}
          width={20}
        />
      </button>
      <ul>
        <li className={classes.title}>Shop</li>
        <li>
          <Link href='/collections/new-arrivals'>New Arrivals</Link>
        </li>
        <li>
          <Link href='/collections/new-arrivals'>Featured</Link>
        </li>
        <li>
          <Link href='/collections/new-arrivals'>Womens</Link>
        </li>
        <li>
          <Link href='/collections/new-arrivals'>Mens</Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterItem;

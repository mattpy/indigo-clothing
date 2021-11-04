import Link from 'next/link';

import WomensLinks from './womens-links/womens-links';
import MensLinks from './mens-links/mens-links';
import classes from './links.module.scss';

function Links(): JSX.Element {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link href='/collections/'>Collections</Link>
        </li>
        <li>
          <WomensLinks />
        </li>
        <li>
          <MensLinks />
        </li>
        {/* <li>
          <Link href='/collections/featured'>Featured</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Links;

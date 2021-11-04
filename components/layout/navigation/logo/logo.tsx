import Link from 'next/link';

import classes from './logo.module.scss';

function Logo(): JSX.Element {
  return (
    <Link href='/'>
      <a>
        <div className={classes.container}>
          <div className={classes.scrolling}>
            <div className={classes.leftText}>Indigo</div>
          </div>{' '}
          <div className={classes.rightText}>Clothing Co.</div>
        </div>
      </a>
    </Link>
  );
}

export default Logo;

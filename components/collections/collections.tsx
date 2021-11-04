import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

import classes from './collections.module.scss';

function Collections(props): JSX.Element {
  return (
    <div className={classes.container}>
      <Fade cascade={true} damping={0.25}>
        {props.collections.map(item => (
          <div key={item.title} className={classes.wrapper}>
            <div className={classes.title}>{item.title}</div>
            <Link href={item.link}>
              <a>
                <Image
                  layout='responsive'
                  src={item.image}
                  height={400}
                  width={300}
                  alt={item.title}
                />
              </a>
            </Link>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Collections;

import Image from 'next/image';
import Link from 'next/link';

import classes from './icon-card.module.scss';

interface Props {
  icon: {
    image: string
    link: string
  }
}

function IconCard(props: Props): JSX.Element {
  const { image, link } = props.icon;
  return (
    <div className={classes.container}>
      <Link href={link}>
        <a>
          <Image src={image} alt={link} width={22} height={22} />
        </a>
      </Link>
    </div>
  );
}

export default IconCard;

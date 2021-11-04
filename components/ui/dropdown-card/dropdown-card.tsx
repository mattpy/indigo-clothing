import Link from 'next/link';
import Image from 'next/image';

import classes from './dropdown-card.module.scss';

interface Props {
  title: string;
  image: string;
}

function DropdownCard(props: Props): JSX.Element {
  const title = props.title.replace(' ', '-').toLowerCase();

  return (
    <div className={classes.container}>
      <Link
        href={{
          pathname: `/collections/[productType]`,
          query: { productType: title }
        }}
      >
        <a>
          <div>
            <Image src={props.image} height={50} width={50} alt={props.title} />
          </div>
          <div className={classes.title}>{props.title}</div>
        </a>
      </Link>
    </div>
  );
}

export default DropdownCard;

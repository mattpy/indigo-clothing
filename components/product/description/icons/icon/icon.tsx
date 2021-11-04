import Image from 'next/image';

import classes from './icon.module.scss';

function Icon(props) {
  return (
    <div className={classes.container}>
      <Image src={props.icon} width={70} height={70} alt='Icon' />
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

export default Icon;

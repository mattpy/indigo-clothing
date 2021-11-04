import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import classes from './main-photo.module.scss';

interface Props {
  title: string;
  image: string;
}

function MainPhoto({ title, image }: Props) {
  return (
    <div className={classes.container}>
      <Fade duration={1500}>
        <Image
          src={image}
          alt={title}
          layout='responsive'
          height={720}
          width={540}
        />
      </Fade>
    </div>
  );
}

export default MainPhoto;

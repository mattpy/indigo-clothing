import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-responsive-carousel';

import classes from './hero.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Item = {
  _id: string;
  image: string;
  link: string;
};

interface Props {
  items: Item[];
}

function Hero(props: Props): JSX.Element {
  return (
    <div id={classes.container}>
      <Fade>
        <Carousel
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showThumbs={false}
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
        >
          {props.items.map(item => {
            return (
              <div key={item._id} className={classes.imageWrapper}>
                <Image
                  src={`${item.image}`}
                  alt='Carousel'
                  layout='responsive'
                  height={450}
                  width={1000}
                />
              </div>
            );
          })}
        </Carousel>
      </Fade>
    </div>
  );
}

export default Hero;

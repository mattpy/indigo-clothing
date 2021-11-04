import { Carousel } from 'react-responsive-carousel';

import classes from './announcements.module.scss';

function Announcements() {
  return (
    <Carousel
      autoPlay={true}
      interval={7000}
      infiniteLoop={true}
      showThumbs={false}
      emulateTouch={true}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      transitionTime={2000}
    >
      <div className={classes.wrapper}>Free Shipping Nationwide</div>
      <div className={classes.wrapper}>Sales Every Weekend</div>
    </Carousel>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}

export default Announcements;

import Image from 'next/image';
import ReactStars from 'react-rating-stars-component';

import classes from './review.module.scss';

function Review(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <div className={classes.image}>
          <Image
            src='/icons/user/profile-user.png'
            height={25}
            width={25}
            alt='User profile pic'
          />
        </div>
        <span className={classes.username}>User name</span>
        <ReactStars
          count={5}
          size={18}
          isHalf={true}
          color='#DBDBDB'
          value={4}
          edit={false}
          activeColor='#262626'
          emptyIcon={<i className='far fa-star'></i>}
          halfIcon={<i className='fa fa-star-half-alt'></i>}
          fullIcon={<i className='fa fa-star'></i>}
        />
      </div>
      <div className={classes.review}>
        <h4></h4>
        <div>
          Me encanto. Es súper cómoda, es de tamaño grande por lo que entra
          todo. La uso para todo día y es realmente genial.
        </div>
      </div>
    </div>
  );
}

export default Review;

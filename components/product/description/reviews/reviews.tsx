import Image from 'next/image';
import { Transition } from 'react-transition-group';

import { Review as IReview } from '../../product/product';
import Rating from '../rating/rating';
import { noReviewsStyles, hasReviewsStyles } from './styles';
import classes from './reviews.module.scss';
import Review from './review/review';

interface Props {
  reviews: IReview[];
  showReviews: boolean;
  handleShowReviews: () => void;
}

function Reviews(props: Props): JSX.Element {
  const { reviews, showReviews, handleShowReviews } = props;

  const styles = !!reviews.length ? hasReviewsStyles : noReviewsStyles;

  return (
    <div className={classes.container}>
      <div className={classes.tab} onClick={handleShowReviews}>
        <span className={classes.title}>Reviews</span>
        <span className={`${classes.arrow} ${showReviews && classes.flip}`}>
          <Image
            src='/icons/product/down-arrow.png'
            height={12}
            width={12}
            alt='Down arrow'
          />
        </span>
      </div>
      <Transition
        in={showReviews}
        timeout={{ enter: 0, exit: 300 }}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div className={classes.reviews} style={{ ...styles[state] }}>
            <div className={classes.rating}>
              <Rating handleShowReviews={() => {}} size={18} />
            </div>
            {!reviews.length && (
              <div className={classes.noReviews}>No reviews for this item.</div>
            )}
            {!!reviews.length &&
              reviews.map(review => <Review key={review._id} />)}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Reviews;

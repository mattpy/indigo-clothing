import ReactStars from 'react-rating-stars-component';

import classes from './rating.module.scss';

interface Props {
  handleShowReviews: () => void;
  size?: number;
  fontSize?: string;
  button?: boolean;
  horizontal?: boolean;
}

function Rating(props: Props) {
  const content = '( 9 reviews )';

  return (
    <div
      className={`${classes.container} ${
        props.horizontal && classes.horizontal
      }`}
      onClick={props.handleShowReviews}
    >
      <div style={{ position: 'relative', zIndex: 100 }}>
        <ReactStars
          count={5}
          size={props.size ?? 24}
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
      <div className={classes.reviews}>
        {props.button ? (
          <button style={{ fontSize: props.fontSize ?? 'revert' }}>
            {content}
          </button>
        ) : (
          <span>{content}</span>
        )}
      </div>
    </div>
  );
}

export default Rating;

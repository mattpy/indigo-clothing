import { Fade } from 'react-awesome-reveal';

import Item from '../home/item-set/item/item';
import classes from './collection.module.scss';

function Collection(props): JSX.Element {
  return (
    <div className={classes.container}>
      <Fade cascade={true} damping={0.25}>
        {props.collection.map(item => (
          <Item key={item._id} product={item} />
        ))}
      </Fade>
    </div>
  );
}

export default Collection;

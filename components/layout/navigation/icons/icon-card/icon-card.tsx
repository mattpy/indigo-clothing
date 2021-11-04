import classes from './icon-card.module.scss';

function IconCard(props): JSX.Element {
  return <div className={classes.container}>{props.children}</div>;
}

export default IconCard;

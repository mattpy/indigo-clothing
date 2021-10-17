import IconCard from './icon-card/icon-card';
import classes from './icons.module.scss';

function Icons(): JSX.Element {
  return (
    <div className={classes.container}>
      <ul>
        {icons.map(icon => (
          <li key={icon.link}>
            <IconCard icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Icons;

const icons = [
  {
    link: '/account',
    image: '/images/nav/profile.png'
  },
  {
    link: '/search',
    image: '/images/nav/search.png'
  },
  {
    link: '/wishlist',
    image: '/images/nav/wishlist.png'
  },
  {
    link: '/cart',
    image: '/images/nav/cart.png'
  }
];

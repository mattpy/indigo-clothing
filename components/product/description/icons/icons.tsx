import Icon from './icon/icon';
import classes from './icons.module.scss';

function Icons() {
  return (
    <div className={classes.container}>
      {icons.map(icon => (
        <Icon key={icon.id} {...icon} />
      ))}
    </div>
  );
}

const icons = [
  {
    id: 1,
    icon: '/icons/product/delivery.png',
    text: 'Free Shipping Worldwide!'
  },
  {
    id: 2,
    icon: '/icons/product/pickup.png',
    text: 'Pickup in 2 hours!'
  },
  {
    id: 3,
    icon: '/icons/product/changes.png',
    text: 'Free returns & exchanges!'
  },
  {
    id: 4,
    icon: '/icons/product/installments.png',
    text: 'Financing available!'
  }
];

export default Icons;

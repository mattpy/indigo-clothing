import { useState } from 'react';

import Dropdown from '../../../../ui/dropdown/dropdown';
import classes from './womens-links.module.scss';

function WomensLinks(): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);

  function onMouseEnterHandler(event) {
    setShowDropdown(true);
  }

  function onMouseLeaveHandler(event) {
    setShowDropdown(false);
  }

  return (
    <div
      className={classes.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <span>Womens</span>
      {showDropdown && <Dropdown menuItems={menuItems()} />}
    </div>
  );
}

export default WomensLinks;

function menuItems() {
  return [
    // {
    //   title: 'T-Shirts',
    //   image: '/images/swatches/womens/tshirts.jpg'
    // },
    {
      title: 'Denim',
      image: '/images/swatches/womens/denim.jpg'
    },
    {
      title: 'Sweatshirts',
      image: '/images/swatches/womens/sweatshirts.jpg'
    },
    {
      title: 'Pants',
      image: '/images/swatches/womens/pants.jpg'
    },
    {
      title: 'Jackets',
      image: '/images/swatches/womens/jackets.jpg'
    },
    {
      title: 'Caps',
      image: '/images/swatches/womens/caps.jpg'
    }
    // {
    //   title: 'All Clothing',
    //   image: '/images/swatches/womens/all-clothing.gif'
    // }
  ];
}

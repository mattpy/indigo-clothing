import { useState } from 'react';

import Dropdown from '../../../../ui/dropdown/dropdown';
import classes from './mens-links.module.scss';

function MensLinks(): JSX.Element {
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
      <span>Mens</span>
      {showDropdown && <Dropdown inProgress={true} menuItems={menuItems()} />}
    </div>
  );
}

export default MensLinks;

function menuItems() {
  return [
    // {
    //   title: 'T-Shirts',
    //   image: '/images/swatches/mens/tshirts.png'
    // },
    // {
    //   title: 'Shirts',
    //   image: '/images/swatches/mens/shirts.png'
    // },
    {
      title: 'Jackets',
      image: '/images/swatches/mens/suits.png'
    },
    {
      title: 'Sweatshirts',
      image: '/images/swatches/mens/sweaters.png'
    },
    {
      title: 'Pants',
      image: '/images/swatches/mens/pants.png'
    },
    {
      title: 'Denim',
      image: '/images/swatches/mens/jeans.png'
    }
  ];
}

import Image from 'next/image';
import { useContext, useState } from 'react';
import OCH from 'react-outside-click-handler';

import { StoreContext } from '../../../../lib/context/context';
import Search from './icon-card/search/search';
import Cart from '../../../cart/cart';
import IconCard from './icon-card/icon-card';
import classes from './icons.module.scss';

function Icons(): JSX.Element {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(StoreContext);

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setSearchOpen(true);
  };

  const handleShowCart = () => {
    setShowCart(c => !c);
  };

  return (
    <div className={classes.container}>
      <ul>
        <li>
          <IconCard>
            <OCH useCapture onOutsideClick={() => setSearchOpen(false)}>
              <div className={classes.searchbar}>
                <div onClick={handleClick}>
                  <a>
                    <Image
                      src='/images/nav/search.png'
                      alt='Search'
                      width={22}
                      height={22}
                    />
                  </a>
                </div>
                {searchOpen && <Search setSearchOpen={setSearchOpen} />}
              </div>
            </OCH>
          </IconCard>
        </li>
        {/* <li>
          <IconCard>
            <Image
              src='/images/nav/wishlist.png'
              alt='Wishlist'
              width={22}
              height={22}
            />
          </IconCard>
        </li> */}
        <li onClick={handleShowCart}>
          <IconCard>
            <Image
              src='/images/nav/cart.png'
              alt='Wishlist'
              width={19}
              height={19}
            />
            <span id={classes.cartIcon}>{cart?.length && cart.length}</span>
          </IconCard>
        </li>
      </ul>
      {showCart && <Cart closeCart={handleShowCart} />}
    </div>
  );
}

export default Icons;

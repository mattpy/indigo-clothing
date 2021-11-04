import { useEffect } from 'react';
import throttle from 'lodash/throttle';

import StoreProvider from '../../lib/context/context';
import Announcements from './announcements/announcements';
import Navbar from './navigation/navbar/navbar';
import Footer from './footer/footer/footer';

function Layout(props): JSX.Element {
  function onScrollEvent() {
    const header: HTMLElement = document.querySelector('#navbar-header');
    if (window.scrollY !== 0) {
      header.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
      header.style.borderBottom = '1px solid #dbdbdb';
    } else {
      header.style.boxShadow = 'none';
      header.style.borderBottom = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScrollEvent, 250));
    return () => window.removeEventListener('scroll', throttle(onScrollEvent));
  }, []);

  return (
    <StoreProvider>
      <div id='dropdown-menu' />
      <Announcements />
      <Navbar />
      {props.children}
      <Footer />
    </StoreProvider>
  );
}

export default Layout;

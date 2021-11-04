import Logo from '../logo/logo';
import Links from '../links/links';
import Icons from '../icons/icons'
import classes from './navbar.module.scss';

function Navbar(): JSX.Element {
  return (
    <header id='navbar-header' className={classes.container}>
      <Logo />
      <Links />
      <Icons />
    </header>
  );
}

export default Navbar;

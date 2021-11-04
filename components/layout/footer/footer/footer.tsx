import FooterItem from '../footer-item/footer-item';
import classes from './footer.module.scss';

function Footer() {
  return (
    <div className={classes.container}>
      <FooterItem />
    </div>
  );
}

export default Footer;

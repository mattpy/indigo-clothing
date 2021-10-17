import DropdownCard from '../dropdown-card/dropdown-card';
import classes from './dropdown.module.scss';

interface Props {
  menuItems: { title: string; image: string }[];
}

function Dropdown(props: Props): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {props.menuItems.map(item => (
          <DropdownCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

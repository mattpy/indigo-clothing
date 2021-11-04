import classes from './quantity.module.scss';

interface Props {
  quantity: string;
  changeQuantity: (args: number) => void;
}

function Quantity({ quantity, changeQuantity }: Props) {
  function handleChangeQuantity(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    switch ((event.target as HTMLButtonElement).name) {
      case 'increase':
        changeQuantity(+quantity + 1);
        break;
      case 'decrease':
        if (+quantity <= 1) {
          return;
        }
        changeQuantity(+quantity - 1);
        break;
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    changeQuantity(+value);
  }

  function handleBlur(event) {
    const { value } = event.target;
    if (!value || +value < 1) {
      changeQuantity(1);
    }
  }

  return (
    <div className={classes.container}>
      <span className={classes.label}>Quantity</span>
      <form>
        <button type='button' name='decrease' onClick={handleChangeQuantity}>
          -
        </button>
        <input
          type='number'
          value={quantity}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
        <button type='button' name='increase' onClick={handleChangeQuantity}>
          +
        </button>
      </form>
    </div>
  );
}

export default Quantity;

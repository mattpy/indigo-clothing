import Image from 'next/image';

import classes from './photo.module.scss';

interface Props {
  image: string;
  selectedImage: string;
  onChangeImage: (args: string) => void;
}

function Photo(props: Props): JSX.Element {
  const { image, selectedImage, onChangeImage } = props;

  const isSelected = image === selectedImage;

  return (
    <div
      className={`${classes.container} ${isSelected && classes.selected}`}
      onClick={onChangeImage.bind(null, image)}
    >
      <Image src={image} height={100} width={80} alt='Product image' />
    </div>
  );
}

export default Photo;

import { Fade } from 'react-awesome-reveal';

import Photo from './photo/photo';
import classes from './photos.module.scss';

interface Props {
  images: string[];
  selectedImage: string;
  onChangeImage: (args: string) => void;
}

function ProductPhotos(props: Props) {
  return (
    <div className={classes.container}>
      {props.images.map((image, idx) => (
        <Fade key={idx} cascade={true} duration={1500}>
          <Photo
            selectedImage={props.selectedImage}
            onChangeImage={props.onChangeImage}
            image={image}
          />
        </Fade>
      ))}
    </div>
  );
}

export default ProductPhotos;

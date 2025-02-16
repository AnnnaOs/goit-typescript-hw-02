import { Image } from '../App/App.types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard = ({ image, openModal }: ImageCardProps) => {
  return (
    <div className={css.imageCard}>
      <img
        onClick={() => {
          openModal(image);
        }}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        width="360"
      />
    </div>
  );
};

export default ImageCard;

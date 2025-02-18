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
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => {
          openModal(image);
        }}
      />
    </div>
  );
};

export default ImageCard;

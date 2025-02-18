import Modal from 'react-modal';
import { Image } from '../App/App.types';
import css from './ImageModal.module.css';

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.imageModalContent}>
        <img
          src={image?.urls?.regular}
          alt={image?.alt_description}
          className={css.imageModal}
        />
        <div className={css.imageModalInfo}>
          <p className={css.imageModalDescription}>{image?.alt_description}</p>
          <p className={css.imageModalAuthor}>by {image?.user?.name}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;

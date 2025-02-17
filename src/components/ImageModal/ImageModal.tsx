import Modal from 'react-modal';
import { Image } from '../App/App.types';
import css from './ImageModal.module.css';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
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
        <p className={css.imageModalDescription}>Author: {image?.user?.name}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;

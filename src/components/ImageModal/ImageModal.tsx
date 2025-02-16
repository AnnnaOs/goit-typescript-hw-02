import Modal from 'react-modal';
import { Image } from '../App/App.types';
import { FaTimes } from 'react-icons/fa';
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
        <div className={css.imageInfo}>
          <p>
            <strong>✍️Author:</strong> {image?.user?.name}
          </p>
          <p>
            <strong>❤️Likes:</strong> {image?.likes}
          </p>
          <p>
            <strong>📝Description:</strong>{' '}
            {image?.alt_description || 'No description available'}
          </p>
        </div>
        <button className={css.imageModalCloseBtn} onClick={onClose}>
          <FaTimes size={24} />
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;

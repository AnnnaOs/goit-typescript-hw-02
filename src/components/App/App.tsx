import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImages } from '../../services/unsplash-api';
import { Image } from './App.types';

Modal.setAppElement('#root');

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isShowButton, setIsShowButton] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const loadGallery = async () => {
      try {
        setIsLoading(true);

        const res = await fetchImages(query, page);
        if (res.results.length === 0) {
          setIsShowButton(false);
          toast('Sorry, there are no images matching your search', {
            duration: 5000,
          });
          setIsLoading(false);
          return;
        }

        setImages(prev => [...prev, ...res.results]);
        setIsShowButton(page < Math.ceil(res.total / 9) ? true : false);
        setIsLoading(false);
      } catch (_) {
        setError('Something went wrong! Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGallery();
  }, [query, page]);

  const getInputValue = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (imageId: Image) => {
    setSelectedImage(imageId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <SearchBar onSubmit={getInputValue} />
      <Toaster />
      <div>
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          images.length > 0 && (
            <ImageGallery images={images} openModal={openModal} />
          )
        )}
      </div>
      {isLoading && <Loader />}
      {isShowButton && (
        <LoadMoreBtn onClick={() => setPage(page => page + 1)} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;

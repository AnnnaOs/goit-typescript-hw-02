import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;

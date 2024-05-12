import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onLoadMore} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
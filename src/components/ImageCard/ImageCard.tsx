import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
    thumb: string;
    small_s3: string;
    raw: string;
    full: string;
  };
  description: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  description,
  onClick,
}) => {
  return (
    <div>
      <img
        className={css.galleryImage}
        src={urls.small}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
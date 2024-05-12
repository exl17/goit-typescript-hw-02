import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: Photo[] | null;
  onImageClick: (photo: Photo) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(photos) &&
          photos.map((photo: Photo) => {
            return (
              <li key={photo.id}>
                <ImageCard
                  urls={photo.urls}
                  description={photo.description}
                  onClick={() => onImageClick(photo)}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
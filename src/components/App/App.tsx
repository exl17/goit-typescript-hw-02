import { useState, useEffect } from "react";
import "./App.css";
import { requestPhotosByQuery } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query.length) return;
    const fetchPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query, page);
        console.log("data: ", data);
        if (page === 1) {
          setPhotos(data);
        } else {
          setPhotos((prevPhotos: Photo[] | null) =>
            prevPhotos ? [...prevPhotos, ...data] : data
          );
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotosByQuery();
  }, [query, page]);

  const onsearchQuery = (searchTerm: string) => {
    setQuery(searchTerm);
    setPage(1);
  };
  const onLoadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image.urls.regular);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 3000,
          position: "top-center",
          style: {
            background: "red",
            color: "#fff",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <SearchBar onsearchQuery={onsearchQuery} />
      {isLoading && <Loader visible={isLoading} />}
      {isError && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} onImageClick={openModal} />}
      {photos && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;
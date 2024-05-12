import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  selectedImage,
}) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
    >
      {selectedImage !== null && <img src={selectedImage} alt="Selected" />}
    </Modal>
  );
};

export default ImageModal;
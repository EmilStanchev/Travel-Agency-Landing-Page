import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isPhoneScreen = window.innerWidth <= 768;
  const closeButtonStyle = isPhoneScreen
    ? { top: "5.5rem", right: "0.8rem" }
    : { top: "18%", right: "33%" };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden group w-[400px] h-[300px] max-w-[500px] max-h-[300px]">
      <img
        src={image}
        alt={`${title} image`}
        className="object-cover h-64 w-full transition-transform transform group-hover:scale-110"
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content">
            <img src={image} alt={title} className="w-[500px] h-[400px]" />
            <button
              onClick={closeModal}
              className="text-red-500 absolute text-2xl sm:top-20 sm:right-20"
              style={{
                ...closeButtonStyle,
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      )}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={openModal}
      >
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

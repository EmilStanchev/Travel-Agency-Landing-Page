/* eslint-disable react/prop-types */
import { useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../UI/Title";
import CommentCard from "../UI/CommentCard";

const Slider = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="my-12">
        <Title style={{ color: "rgb(34 197 94)" }} text="Customer Reviews " />
      </div>
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-1 mx-4 my-4">
          <div className="overflow-hidden">
            <div
              className="transition-transform transform ease-in-out duration-300"
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {clients.map((client) => (
                <CommentCard key={client.id} client={client} />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

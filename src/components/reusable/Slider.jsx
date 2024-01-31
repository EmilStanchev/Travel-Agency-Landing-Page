/* eslint-disable no-unused-vars */
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
    <div className="hidden md:flex flex-col max-w-xl mx-auto my-5 md:my-10 lg:my-16">
      <div className="mb-8">
        <Title style={{ color: "rgb(34 197 94)" }} text="Customer Reviews" />
      </div>
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="hidden md:flex text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-1 mx-4 my-4 overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {clients.map((client) => (
              <div key={client?.id} className="flex-shrink-0 w-full flex-wrap">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800">{client.comment}</p>
                  <div className="flex flex-row justify-center gap-5 mt-5">
                    <h1 className="text-black mt-2 font-extrabold text-xl">
                      {client.name}
                    </h1>
                    <img
                      src={client.avatar}
                      alt={`${client.name} avatar`}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="hidden md:flex text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

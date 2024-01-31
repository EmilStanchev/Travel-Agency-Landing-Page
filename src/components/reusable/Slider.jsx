import { useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../UI/Title";
import CommentCard from "../UI/CommentCard";
const Slider = () => {
  const clients = [
    {
      id: 1,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://placekitten.com/100/100",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://placekitten.com/101/101",
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      avatar: "https://placekitten.com/102/102",
    },
  ];

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
        <Title color="red" text="Happy Clients " />
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

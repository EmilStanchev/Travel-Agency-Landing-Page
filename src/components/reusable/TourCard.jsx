// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden group w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-[500px]">
      {/* Adjusted height for responsiveness */}
      <img
        src={image}
        alt={`${title} image`}
        className="object-cover h-56 sm:h-64 md:h-72 lg:h-80 w-full transition-transform transform group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

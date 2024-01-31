// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={image}
        alt={`${title} image`}
        className="object-cover w-full h-64 transition-transform transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

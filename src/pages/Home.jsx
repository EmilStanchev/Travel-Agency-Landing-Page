/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/backgroundImage.jpg";

const Home = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: -1 }}
      ></div>
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4 text-green-500">
          Welcome to Nature Nest
        </h1>
        <p className="text-lg mb-8 text-white">
          Let's Discover The World Together!
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-full">
          Plan Your Trip Now
        </button>
      </div>
    </div>
  );
};

export default Home;

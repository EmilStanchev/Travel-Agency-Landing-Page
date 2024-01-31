import Title from "../components/UI/Title";
import TourCard from "../components/reusable/TourCard";
import franceTour from "../assets/pexels-porapak-apichodilok-346885.jpg";
const Gallery = () => {
  return (
    <div id="gallery" className="flex justify-center flex-col ">
      <div className="">
        <Title style={{ color: "rgb(34 197 94)" }} text="Tour Gallery" />
      </div>
      <div className="flex flex-row gap-2  justify-center flex-wrap my-10">
        <TourCard image={franceTour} title="France Tour" />
        <TourCard image={franceTour} title="Dubai Tour" />
        <TourCard image={franceTour} title="Dubai Tour" />
        <TourCard image={franceTour} title="Dubai Tour" />
        <TourCard image={franceTour} title="Dubai Tour" />
        <TourCard image={franceTour} title="Dubai Tour" />
      </div>
    </div>
  );
};

export default Gallery;

import Title from "../components/UI/Title";
import TourCard from "../components/reusable/TourCard";
import {
  franceTour,
  dubaiTour,
  londonTour,
  santoriniTour,
  icelandTour,
  copenhagen,
} from "../assets/gallery";
import Slider from "../components/reusable/Slider";

const Gallery = () => {
  return (
    <div id="gallery" className="flex justify-center flex-col ">
      <div className="">
        <Title style={{ color: "rgb(34 197 94)" }} text="Tour Gallery" />
      </div>
      <div className="flex flex-row gap-2  justify-center flex-wrap my-10 px-5">
        <TourCard image={franceTour} title="Paris Tour" />
        <TourCard image={dubaiTour} title="Dubai Tour" />
        <TourCard image={londonTour} title="London Tour" />
        <TourCard image={santoriniTour} title="Santorini Tour" />
        <TourCard image={icelandTour} title="Iceland Tour" />
        <TourCard image={copenhagen} title="Copenhagen Tour" />
      </div>
      <div className="flex">
        <Slider />
      </div>
    </div>
  );
};

export default Gallery;

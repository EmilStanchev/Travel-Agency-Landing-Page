import Title from "../components/UI/Title";
import ServiceCard from "../components/reusable/ServiceCard";
import {
  faRocket,
  faPlane,
  faBed,
  faPersonWalkingLuggage,
  faGear,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id="aboutUs" className="flex flex-col gap-10 mx-8 ">
      <div className="">
        <Title style={{ color: "rgb(34 197 94)" }} text="About Us" />
      </div>
      <div className="flex justify-center flex-wrap gap-5 items-center">
        <ServiceCard
          icon={faPlane}
          title="Flight Booking"
          description="Unlock the skies with seamless flight booking services. Explore a world of destinations effortlessly as we connect you to your dream journey."
        />
        <ServiceCard
          icon={faRocket}
          title="Top Package"
          description="Indulge in our exclusive Top Package, curated for discerning travelers seeking the pinnacle of luxury and experiences. Elevate your journey with the finest accommodations, activities, and personalized service."
        />
        <ServiceCard
          icon={faBed}
          title="Hotel Booking"
          description="Discover a home away from home with our hotel booking service. From cozy retreats to lavish escapes, we ensure a perfect stay tailored to your preferences."
        />
        <ServiceCard
          icon={faPersonWalkingLuggage}
          title="Amazing Tour"
          description="Embark on an Amazing Tour with us, where every moment is a masterpiece. Immerse yourself in unforgettable experiences and create memories that last a lifetime."
        />
        <ServiceCard
          icon={faLocationDot}
          title="Best Destination"
          description="Uncover the Best Destinations with our expertly crafted itineraries. Whether you seek adventure, relaxation, or cultural exploration, we guide you to the most captivating places on Earth."
        />
        <ServiceCard
          icon={faGear}
          title="Premium Support"
          description="Experience travel with peace of mind. Our Premium Support ensures you have dedicated assistance at every step, offering a seamless and stress-free journey"
        />
      </div>
    </div>
  );
};

export default About;

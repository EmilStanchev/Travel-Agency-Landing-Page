/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const LinkWithAnimation = ({ path, text }) => {
  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      className="text-green-500 hover:text-gray-300 cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default LinkWithAnimation;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";

const LinkWithAnimation = ({ path, text, color, hoverColor }) => {
  const [isHover, setIsHover] = useState(false);

  const link = {
    cursor: "pointer",
    color: isHover ? hoverColor : color,
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      style={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </Link>
  );
};

export default LinkWithAnimation;

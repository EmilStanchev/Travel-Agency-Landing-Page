/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className=" min-w-[200px] h-[250px] mx-4 max-w-sm bg-white shadow-xl rounded-md overflow-hidden my-8">
      <div className="text-center pt-4">
        <FontAwesomeIcon className="text-4xl" icon={icon} />
        <div className="py-4 text-center ">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 px-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

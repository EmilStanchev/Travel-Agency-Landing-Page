/* eslint-disable react/prop-types */

const InfoContainer = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-xl text-gray-500">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default InfoContainer;

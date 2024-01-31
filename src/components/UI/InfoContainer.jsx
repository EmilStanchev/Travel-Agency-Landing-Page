/* eslint-disable react/prop-types */

const InfoContainer = ({ title, description }) => {
  return (
    <div className="mb-4 flex flex-col">
      <h4 className="font-bold text-xl text-gray-500 mb-2">{title}</h4>
      <p className="text-sm text-gray-700 break-all">{description}</p>
    </div>
  );
};

export default InfoContainer;

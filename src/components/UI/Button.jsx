/* eslint-disable react/prop-types */
const Button = ({ text, style }) => {
  console.log(text);
  return (
    <button
      className="bg-green-500 text-white py-2 px-4 rounded-full "
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;

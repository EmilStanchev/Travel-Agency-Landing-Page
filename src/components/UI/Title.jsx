/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const Title = ({ text, style }) => {
  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center"
      style={style}
    >
      {text}
    </h1>
  );
};

export default Title;

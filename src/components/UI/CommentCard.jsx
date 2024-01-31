/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CommentCard = ({ client }) => {
  return (
    <div key={client?.id} className="flex-shrink-0 w-full">
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-800">{client.comment}</p>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <h1 className="text-black mt-2 font-extrabold text-xl">
            {client.name}
          </h1>
          <img
            src={client.avatar}
            alt={`${client.name} avatar`}
            className="w-12 h-12 rounded-full mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

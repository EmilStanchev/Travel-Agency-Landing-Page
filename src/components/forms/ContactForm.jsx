import Button from "../UI/Button";
import InfoContainer from "../UI/InfoContainer";

const ContactForm = () => {
  return (
    <div className="flex flex-row p-10 m-10 justify-between">
      <div>
        <InfoContainer title="Phone" description="+330 120 6412 9916" />
        <InfoContainer title="Email" description="naturenest@example.com" />
        <InfoContainer
          title="Address"
          description="123 Main Street,Anytown, CA 12345"
        />
      </div>
      <form className="flex flex-col gap-10 justify-start text-black">
        <div className="flex gap-5">
          <input
            placeholder="Your Name"
            className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
          />
          <input
            placeholder="Your Email"
            className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
          />
        </div>
        <input
          placeholder="Subject"
          className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
        />
        <textarea
          placeholder="Message"
          className="text-black placeholder-gray-500 text-lg bg-transparent border-b border-black outline-none focus:border-none"
        />
        <Button text="Submit" style={{ hover: { color: "red" } }} />
      </form>
    </div>
  );
};

export default ContactForm;

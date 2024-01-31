import { useState } from "react";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden font-extrabold text-xl md:flex">
          <LinkWithAnimation
            path="home"
            text="Nature Nest"
            color="rgb(34 197 94)"
            hoverColor="rgb(209 213 219)"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300 rounded-full bg-white p-1"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              color="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-10">
            <div className="container mx-auto p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    color="orange"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <LinkWithAnimation
                  path="home"
                  text="Home"
                  color="rgb(34 197 94)"
                  hoverColor="rgb(209 213 219)"
                  onClick={toggleMenu()}
                />
                <LinkWithAnimation
                  path="aboutUs"
                  text="About Us"
                  color="rgb(34 197 94)"
                  hoverColor="rgb(209 213 219)"
                  onClick={toggleMenu()}
                />

                <LinkWithAnimation
                  path="gallery"
                  text="Gallery"
                  color="rgb(34 197 94)"
                  hoverColor="rgb(209 213 219)"
                  onClick={toggleMenu()}
                />
                <LinkWithAnimation
                  path="contact"
                  text="Contact"
                  color="rgb(34 197 94)"
                  hoverColor="rgb(209 213 219)"
                  onClick={toggleMenu()}
                />
              </div>
            </div>
          </div>
        )}

        <div className="hidden lg:flex justify-between items-center gap-10">
          <LinkWithAnimation
            path="home"
            text="Home"
            color="rgb(34 197 94)"
            hoverColor="rgb(209 213 219)"
          />
          <LinkWithAnimation
            path="aboutUs"
            text="About Us"
            color="rgb(34 197 94)"
            hoverColor="rgb(209 213 219)"
          />

          <LinkWithAnimation
            path="gallery"
            text="Gallery"
            color="rgb(34 197 94)"
            hoverColor="rgb(209 213 219)"
          />
          <LinkWithAnimation
            path="contact"
            text="Contact"
            color="rgb(34 197 94)"
            hoverColor="rgb(209 213 219)"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

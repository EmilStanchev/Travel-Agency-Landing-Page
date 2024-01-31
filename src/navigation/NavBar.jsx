import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-extrabold text-xl text-green-500">
          <a href="">Nature Nest</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Animated Mobile Menu */}
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
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Home
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  About
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Services
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="hidden md:flex justify-between items-center gap-10">
          <a href="#" className="text-green-500 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-green-500 hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-green-500 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-green-500 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

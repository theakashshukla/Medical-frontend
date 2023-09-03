import React, { useState } from "react";
import brandlogo from "../images/easy-logo.png";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <>
      <nav className="items-center grid grid-cols-2 justify-between flex-wrap p-4 shadow-sm">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img src={brandlogo} className="w-100 h-10 mr-2 ml-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center flex-row justify-end lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* <div className="text-sm lg:flex-grow">
            <a
              href="/#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Home
            </a>
            <a
              href="/#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              About Us
            </a>
            <a
              href="/#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Lab Test
            </a>
            <a
              href="/#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Treatment
            </a>
          </div> */}
          <div className="g-blue-500 py-4 px-8 flex items-end justify-between place-content-end ">
            <nav className="flex">
              <div className="text-m mr-3 lg:flex-grow ">
                <a
                  href="/#"
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 cursor-pointer ${
                    activeMenuItem === "home"
                      ? "border-b-4 rounded-tl-lg border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick("home")}
                >
                  Home
                </a>
                <a
                  href="/#"
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 cursor-pointer ${
                    activeMenuItem === "about"
                      ? "border-b-4 border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick("about")}
                >
                  About Us
                </a>
                <a
                  href="/#"
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 cursor-pointer ${
                    activeMenuItem === "lab"
                      ? "border-b-4 border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick("lab")}
                >
                  Lab Test
                </a>
                <a
                  href="/#"
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 cursor-pointer ${
                    activeMenuItem === "treatment"
                      ? "border-b-4 border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick("treatment")}
                >
                  Treatment
                </a>
              </div>
            </nav>
          </div>
          <div>
            <button className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 border border-transparent rounded-lg shadow hover:bg-orange-800 py-2 px-4 text-white h-9">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

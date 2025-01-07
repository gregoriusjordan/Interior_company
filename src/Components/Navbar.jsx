import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ivory shadow-sm fixed top-0 left-0 w-full z-10 border-b-2 font-dmsan">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-[70px]">
        <Link to="/">
          <img src={logo} alt="" className="w-[60px]" />
        </Link>

        <ul className="hidden md:flex space-x-20 font-poppins font-normal text-lg">
          <li>
            <Link to="/" className="text-black hover:text-coffee duration-100">
              Home
            </Link>
          </li>
        
          <li>
            <Link to="/services" className="text-black hover:text-coffee duration-100">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/design" className="text-black hover:text-coffee duration-100">
              Design Inspiration
            </Link>
          </li>
          <li>
            <Link to="/review" className="text-black hover:text-coffee duration-100">
              Review
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-coffee duration-100">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex flex-row space-x-10 text-xl">
          <i class="fa-brands fa-instagram text-black hover:text-coffee duration-100 "></i>
          <i class="fa-brands fa-x-twitter text-black hover:text-coffee duration-100"></i>
        </div>

        {/* Mobile hamb */}
        <button
          className="block md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="md:hidden bg-ivory border-t border-gray-200">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/design"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Design Inspiration
            </Link>
          </li>
          
          <li>
            <Link
              to="/services"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

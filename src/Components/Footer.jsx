import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-coffee text-white py-6 px-6 md:px-16 font-dmsan">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="w-32" />
          <p className="text-sm">
            Olivia Wilson Interior Design creates timeless spaces that reflect
            personality and style. Let's design your dream space together.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>

            <li>
              <a href="#service" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#design" className="hover:underline">
                Design Inspiration
              </a>
            </li>
            <li>
              <a href="#review" className="hover:underline">
                Review
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>Jl. Cemp. Baru VII No.53, Jakarta</p>
          <p>Email: info@oliviawilsondesign.com</p>
          <p>Phone: +62 123 456 789</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-600 pt-4 text-sm text-left">
        <p>
          &copy; {new Date().getFullYear()}, Olivia Wilson Interior Design. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

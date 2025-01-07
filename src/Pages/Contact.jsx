import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import bg from "../assets/bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

const Contact = () => {
     useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
            });
          }, []);
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen bg-cover bg-center p-6 md:p-16 mt-[70px] font-dmsan"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row md:space-x-8" data-aos="fade-down">
    
          <div className="w-full md:w-1/2" data-aos="fade-down"> 
            <h2 className="text-[40px] text-coffee mb-4">Get in Touch.</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-coffee"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-coffee text-white px-4 py-2 rounded-md hover:bg-coffee-dark transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0" data-aos="fade-down">
            <h2 className="text-[40px] text-coffee mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  Jl. Cemp. Baru VII No.53, Cemp. Baru, Kec. Kemayoran, Kota Jakarta Pusat,
                  Daerah Khusus Ibukota Jakarta 10640
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">+62 812 3456 7890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">info@oliviawilsondesign.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

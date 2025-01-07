import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

const Where = () => {
  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="mt-[100px] mx-[50px] mb-[100px] font-dmsan px-4">
      <div
        className="flex flex-row text-[40px] md:text-[50px] justify-center md:justify-end"
        data-aos="fade-right"
      >
        <h1>Where &nbsp;</h1>
        <h1 className="text-coffee">We &nbsp;</h1>
        <h1>Are</h1>
      </div>

      <div
        data-aos="fade-up"
        className="md:mt-8 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 items-center md:items-start text-black"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.925114521002!2d106.84073408715821!3d-6.166728899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5fd5196fa0d%3A0xbefa54540ba995b0!2sParamarta%20Design!5e0!3m2!1sid!2sid!4v1736233023071!5m2!1sid!2sid"
          className="h-[250px] md:h-[350px] w-full md:w-[550px] rounded-xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-full md:w-[500px] space-y-4">
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] md:w-[100px] mx-auto md:mx-0"
          />
          <h1 className="text-[25px] md:text-[40px] text-center md:text-left">
            Olivia Wilson Interior Design
          </h1>
          <hr className="border-coffee border-2 w-full md:w-[500px] mt-2 mx-auto md:mx-0" />
          <h2 className="text-justify text-[16px] md:text-[20px] mt-4">
            Jl. Cemp. Baru VII No.53, Cemp. Baru, Kec. Kemayoran, Kota Jakarta
            Pusat, Daerah Khusus Ibukota Jakarta 10640
          </h2>
          <h2 className="text-center md:text-left text-[18px] md:text-[25px] text-coffee mt-4">
            Opens at 10 AM &nbsp; | &nbsp; Closes at 6 PM
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Where;

import React, { useEffect, forwardRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import home2 from "../assets/home2.jpg";

const Who = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section ref={ref} className="mt-[120px] mx-[50px] px-4">
      <div
        className="flex flex-wrap justify-center md:justify-start font-dmsan text-[40px] md:text-[50px]"
        data-aos="fade-down"
      >
        <h1>Who &nbsp;</h1>
        <h1 className="text-coffee">We &nbsp;</h1>
        <h1>Are</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:space-x-8 mt-6 space-y-6 md:space-y-0">
        <div className="font-dmsan text-[16px] md:text-[20px]" data-aos="fade-left">
          <p className="text-justify">
            At <b>Olivia Wilson Interior Design</b>, we believe that the spaces we
            inhabit should reflect our personalities, dreams, and lifestyles.
            With a passion for creating timeless designs that blend function and
            aesthetics, we are dedicated to transforming your vision into
            reality.
          </p>
          <br />
          <p className="text-justify">
            Founded by <b>Olivia Wilson</b>, a seasoned interior designer with years of
            experience in the industry, our company is built on the values of
            creativity, innovation, and attention to detail. We specialize in
            both residential and commercial interior design, offering
            personalized solutions that suit the unique needs of each client.
          </p>
          <hr className="mt-[20px] md:mt-[40px] border-coffee border-2" />
        </div>

        <div className="relative font-dmsan text-coffee" data-aos="fade-left">
          <img
            src={home2}
            alt="Interior Design"
            className="h-[200px] w-[600px] md:h-[300px] md:w-[600px] lg:w-[1000px] rounded-xl hover:scale-90 transition duration-200"
          />
          <p className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-sm md:text-xl">
            With
          </p>
          <p className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[30px] md:text-[50px] font-semibold mt-2">
            150+
          </p>
          <p className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-sm md:text-xl">
            Interior Suppliers
          </p>
        </div>
      </div>
    </section>
  );
});

export default Who;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import home1 from "../assets/home1.jpg";
import arrow from "../assets/arrow.svg";

const HeroSection = ({ onArrowClick }) => {
  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []); 

  return (
    <section className="mt-[120px] mx-[50px] text-black">
      <div className="flex md:flex-row flex-col items-start md:space-x-10">
        <div data-aos="fade-right">
          <img
            src={home1}
            className="object-cover h-[500px] w-[600px] rounded-xl"
            alt="Home"
          />
        </div>
        <div className="md:mt-[-10px]">
          <div className="font-dmsan text-black text-left" data-aos="fade-left">
            <h1 className="md:text-[80px] text-[60px] tracking-wide text-coffee" data-aos="fade-left">Simplicity</h1>
            <h1 className="md:text-[50px] text-[30px] mt-[-20px]" data-aos="fade-left">at its best.</h1>
            <h2 className="md:text-[30px] text-[15px] md:mt-[40px] mt-2">Discover how our solution can streamline your process.</h2>
          </div>
          <hr className="border-2 mt-[40px] border-coffee" data-aos="fade-up" />
          <div className="mt-8 flex flex-row items-center justify-between" data-aos="fade-up">
            <h1 className="text-left text-[50px]">Discover Now.</h1>
            <img
              src={arrow}
              alt="Arrow"
              className="w-[50px] ms-[20px] cursor-pointer"
              onClick={onArrowClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

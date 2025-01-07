import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Card = ({ image, title, description }) => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, []); 
  return (
    <div className="bg-white rounded-lg border-2 border-coffee overflow-hidden font-dmsan transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:translate-y-[-10px]" >
      <img src={image} alt="Card Image" className="w-full h-[240px] object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
      <div className="p-4">
        <h2 className="text-[30px] text-black mt-1">{title}</h2>
        <p className="text-coffee text-sm mt-1 mb-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;

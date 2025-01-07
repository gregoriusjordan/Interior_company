import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import ServiceCard from "../Components/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, []); 
  const servicesData = [
    {
      title: "Interior Design.",
      description: "We create innovative interior designs that enhance both aesthetics and functionality.",
      image: "https://i.pinimg.com/736x/fb/c5/11/fbc51177b2ddc1e328abdc4d79a5b6df.jpg",
    },
    {
      title: "Consultation.",
      description: "Our team offers personalized consultation to transform your ideas into reality.",
      image: "https://i.pinimg.com/736x/8a/94/86/8a9486c2bab23dc32a15145ffbc77f2e.jpg",
    },
    {
      title: "Renovation.",
      description: "We specialize in home renovations to make your spaces more comfortable and stylish.",
      image: "https://i.pinimg.com/736x/cd/4f/e9/cd4fe98e50d9720fd7b828ea7e3600ba.jpg",
    },
    {
      title: "3D Visualization.",
      description: "We provide high-quality 3D visualization to help you visualize your design ideas.",
      image: "https://i.pinimg.com/736x/11/d0/0b/11d00b4251abc1f927d1e9b173d2c64e.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="p-6 md:p-16 mt-[50px] font-dmsan bg-ivory">
        <div className="container mx-auto" data-aos="fade-right">
          <h1 className="text-[50px] text-coffee mb-2" data-aos="fade-right">
            Our Services.
          </h1>
          <p className="text-gray-600 mb-8 text-xl">
            Explore the wide range of services we offer to transform your spaces into something special.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-left">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

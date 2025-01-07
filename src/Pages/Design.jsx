import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Components/Footer';


const Design = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
            });
          }, []);
    
      const [reviews, setReviews] = useState([]);
      const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: "",
      });
  const cardData = [
    {
      image: "https://i.pinimg.com/736x/d3/4a/d4/d34ad448b12fd6b63428f0b652099b0f.jpg",
      title: "Minimalistic.",
      description: "Minimalism is a style that celebrates simplicity and clarity, creating a sense of harmony and tranquility."
    },
    {
      image: "https://i.pinimg.com/736x/af/01/bd/af01bddb705257d6babb1df1605c1035.jpg",
      title: "Contemporary.",
      description: "The contemporary style is marked by clean lines, smooth surfaces, and neutral and monochromatic colors. "
    },
    {
      image: "https://i.pinimg.com/736x/18/25/3b/18253b8663a69a91776f8971ce3fc961.jpg",
      title: "Coastal",
      description: "The coastal style draws inspiration from the sea or ocean. "
    },
    {
      image: "https://i.pinimg.com/736x/d1/ae/2e/d1ae2eb175bfdca50eda50e647b53f9d.jpg",
      title: "Scandinavian.",
      description: "Ccandinavian furniture style was in vogue from 1930s to 1950s and is characterized by simplicity, functionality, coziness, and minimalism."
    },
    {
      image: "https://i.pinimg.com/736x/c0/4b/9f/c04b9fe064a5336db7b8b055b557d2cb.jpg",
      title: "Shabby Chic.",
      description: "This style is marked by a worn, lived-in look, muted palette, floral patterns, and ruffles with old-age charm."
    },
    {
      image: "https://i.pinimg.com/736x/b5/c1/0e/b5c10e3ea0de27028e05cfb0d288124c.jpg",
      title: "Transitional Style.",
      description: "The transitional style is a fusion of contemporary and traditional styles."
    },
    {
      image: "https://i.pinimg.com/736x/a0/f3/b8/a0f3b865ff16bb7c7634223fe6c4b33b.jpg",
      title: "Modern.",
      description: "This furniture style was born in the 20th century, bridging artistic and functional elements, and draws inspiration from several traditional types of styles."
    },
    {
      image: "https://i.pinimg.com/736x/3a/6f/28/3a6f280df82249b509dc31b2c8d692f6.jpg",
      title: "Retro.",
      description: "This style refers to furniture pieces that are not old but of the recent past."
    }
  ];

  return (
    <>
      <Navbar />
      <section className="p-6 md:p-16 mt-[50px] font-dmsan bg-ivory" >
        <div className="container mx-auto">
          <h1 className="text-[50px] text-coffee mb-6" data-aos="fade-right">Our Design Inspirations.</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up" >
            {cardData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Design;

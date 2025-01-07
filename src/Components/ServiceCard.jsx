import React from 'react';

const ServiceCard = ({ image, title, description, aos }) => {
  return (
    <div
      className="bg-white rounded-lg border-2 border-coffee overflow-hidden font-dmsan transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:translate-y-[-10px]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[240px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-[30px] text-coffee">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

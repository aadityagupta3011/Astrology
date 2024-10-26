import React from 'react';

const Card = ({ image, title, contact }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">
          {contact.map((contactInfo, index) => (
            <span key={index}>{contactInfo}<br /></span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;

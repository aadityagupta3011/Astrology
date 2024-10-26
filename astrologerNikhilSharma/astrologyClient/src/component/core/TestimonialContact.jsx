import React from 'react';

const TestimonialContact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-100">
      {/* Left Section: Client Testimonials */}
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-xl font-semibold text-black">
          CLIENT <span className="text-red-600">TESTIMONIALS</span> [ 
          <span className="text-blue-600">All Testimonials</span> ]
        </h2>
        <div className="mt-4 flex items-start">
          {/* Testimonial Image */}
          <img
            src="https://www.astrologerNikhilsharma.com/clients-images/meenu-singh.jpg"
            alt="Client"
            className="w-24 h-24 rounded-md shadow-md mr-4"
          />
          {/* Testimonial Content */}
          <div>
            <h3 className="text-lg font-bold">Meenu Singh, Kolkata</h3>
            <p className="text-red-500 italic">Love Problem Solution</p>
            <p className="mt-2 text-gray-700">
              “I am Meenu from Jaipur and I was in great trouble with my love
              life for more than a year. All my tension was vanished as I took
              the great love problem solution by Nikhil Ji and I noticed swift
              improvement in my life. Today I am happy and my love life is
              joyous. I am so grateful for Nikhil Ji's services and his guidance
              in my life. Thank you.........”
            </p>
            <a href="#" className="text-red-600 mt-2 block">
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Information */}
      <div className="md:w-1/2 w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-red-700">CONTACT ASTROLOGER Nikhil SHARMA</h2>
        <p className="text-gray-700 italic mt-2">From Any Corner of the World (24*7)</p>

        <ul className="mt-4 space-y-2">
          {/* Contact Options */}
          <li className="flex items-center">
            <img src="https://www.astrologerNikhilsharma.com/images/whatsupico.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
            <a href="https://wa.me/919815418307" className="text-blue-600">Whats App : +91-95091-68369</a>
          </li>
          <li className="flex items-center">
            <img src="https://www.astrologerNikhilsharma.com/images/telico.png" alt="Call" className="w-6 h-6 mr-2" />
            <a href="tel:+919815418307" className="text-blue-600">Direct Call : +97 1527912616</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default TestimonialContact;

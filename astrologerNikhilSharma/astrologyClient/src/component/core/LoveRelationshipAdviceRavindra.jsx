import React from 'react';
import Card from '../common/CardRavindra.jsx';

const LoveRelationshipAdvice = () => {
  const cardData = [
    {
      image: 'https://www.eternityrose.com/media/shopshark/blog/h4.-Relationship-Challenges_Navigating-the-Storm.gif',
      title: 'Vashikaran Remedies for Overcoming your Relationship Obstacles',
      contact: [' +91-95091-68369', '+97 1527912616'],
      footerLinks: [
        'Vashikaran Remedies for Overcoming your Relationship Obstacles',
        
      ]
    },
    {
      image: 'https://static.toiimg.com/thumb/msid-47418028,imgsize-50532,width-400,resizemode-4/47418028.jpg',
      title: 'Astrological Solutions for Overcoming Your Extramarital Affairs',
      contact: [' +91-95091-68369', '+97 1527912616'],
      footerLinks: [
        'Astrological Solutions for Overcoming Your Extramarital Affairs',
        
      ]
    },
    {
      image: 'https://www.aliciajdiamonds.com/wp-content/uploads/2023/10/lapis-lazuli-gemstones.jpg',
      title: 'Precious Gemstones for Happy and Promising Love Relationships',
      contact: [' +91-95091-68369', '+97 1527912616'],
      footerLinks: [
        '6 Precious Gemstones for Happy and Promising Love Relationships',
        
      ]
    }
  ];

  return (
    <div className="bg-gray-100">
      {/* Top Section: Image and Form */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section with Background Image */}
        <div 
          className="md:w-2/3 h-96 md:h-auto bg-cover bg-center" 
          style={{ backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/02/49/68/36/1000_F_249683613_AQM94BDIftkvWH6pKAUGkQ26B06qZH2Z.jpg')` }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Love & Relationship Advice</h1>
              <div className="text-lg md:text-xl">
                <p>Astrologer Nikhil Sharma</p>
                <p className="text-sm">Best Astrology & Vashikaran Services</p>
                <p className="text-lg mt-2"> +91-95091-68369</p>
                <p className="text-lg">+97 1527912616</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Query Form */}
        <div className="w-full md:w-1/3 bg-orange-600 flex items-center justify-center p-6">
          <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Query Form</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" placeholder="Name" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">E-mail Id</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" type="email" placeholder="E-mail Id" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" type="tel" placeholder="Phone Number" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" placeholder="City" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Your Query</label>
              <textarea className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Query"></textarea>
            </div>

            <div className="mb-6 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2">3 + 3 =</label>
              <input className="w-16 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" placeholder="Total" />
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition duration-200">Submit</button>
          </form>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Main Title Section */}
        <div className=" mb-8">
          <h1 className="text-xl md:text-xl font-bold text-red-600 mb-4">Love and Relationship Advice</h1>
          <p className="text-lg text-gray-700">
            Astrology is an ancient science, thanks to which people have received various information since time immemorial. Watching the stars and celestial bodies, they compared events, looking for a connection between them. 
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="space-y-6">
              <Card 
                image={card.image}
                title={card.title}
                contact={card.contact}
              />
              {/* Footer Links inside each card */}
              <div className="text-center mt-4 space-y-2">
                {card.footerLinks.map((link, linkIndex) => (
                  <a 
                    key={linkIndex} 
                    href="#" 
                    className="text-red-600 font-bold hover:underline block"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveRelationshipAdvice;

import React from 'react';

const YantraHeader = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        {/* Logo and Text */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <img 
              src="https://via.placeholder.com/50x50.png?text=Logo" 
              alt="Logo" 
              className="h-12 w-12"
            />
          </div>
          {/* Text */}
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-2xl font-bold">Astrologer Nikhil Sharma</h1>
            <p className="text-xs sm:text-sm">Best Astrology & Vashikaran Services</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 md:mt-0 hidden md:flex flex-col text-center md:text-right">
          <a href="tel:+919815418307" className="text-yellow-300 text-sm sm:text-lg font-bold">
            +91-95091-68369
          </a>
          <a href="mailto:info@AstrologerNikhilSharma.com" className="text-xs sm:text-sm text-white">
            info@AstrologerNikhilSharma.com
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-orange-700">
        <div className="container mx-auto px-6 py-3">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-14 text-white font-semibold">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Profile</a></li>
            <li><a href="#" className="hover:text-yellow-300">Counseling</a></li>
            <li><a href="#" className="hover:text-yellow-300">Astrology</a></li>
            <li><a href="#" className="hover:text-yellow-300">Love Problem</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default YantraHeader;

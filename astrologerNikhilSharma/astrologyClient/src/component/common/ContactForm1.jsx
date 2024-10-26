import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS for the map

const ContactForm = () => {
  return (
    <div className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-bold text-yellow-600 mb-4">Contact Us for Yantra</h2>
      <form className="space-y-4">
        <div>
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <input type="email" placeholder="E-mail Id" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <input type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <textarea placeholder="Your Query" className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <span>2 + 4 =</span>
          <input type="text" placeholder="Total" className="w-16 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-300 to-red-400 p-4 sm:p-8 flex flex-wrap lg:flex-nowrap justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Left: Contact Form */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <ContactForm />
      </div>

      {/* Right: Map */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <MapContainer
          center={[28.6139, 77.209]} // Replace with appropriate coordinates
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-96 rounded-lg shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.209]}>
            <Popup>
              India 360 Degree <br /> New Delhi.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactPage;


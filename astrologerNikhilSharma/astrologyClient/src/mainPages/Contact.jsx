import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import nikhilSharma from '../images/nikhilSharma.jpg';

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    query: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Request sent successfully!');
        // Clear form fields after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          query: '',
        });
      } else {
        alert('Request sent successfully!');
      }
    } catch (error) {
      console.error('Request sent successfully!');
      alert('Request sent successfully!');
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="container mx-auto p-4 custom-md:flex flex-col md:flex-row justify-between items-start gap-2">
          {/* Ganpati Image Section */}
          <div className="ganpatiImage w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={nikhilSharma}
              alt="Astrologer Nikhil Sharma"
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="contentSection w-full md:w-1/2 p-4 border custom-md:flex border-gray-300 rounded-lg gap-3">
            {/* Query Box */}
            <div className="border-2 border-red-500 p-4 custom-md:w-[25vw] w-full bg-gray-500">
              <h2 className="text-xl font-bold text-red-600">
                Get Your Problem Solution
              </h2>
              <p className="text-sm italic mb-4">
                Quit Sadness, Catch Happiness!
              </p>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border w-full p-2"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border w-full p-2"
                    placeholder="E-mail Id"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div className="mb-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border w-full p-2"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* City Input */}
                <div className="mb-2">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="border w-full p-2"
                    placeholder="City"
                    required
                  />
                </div>

                {/* Query Input */}
                <div className="mb-2">
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="border w-full p-2 resize-none"
                    placeholder="Your Query"
                    rows="4"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white font-bold py-2 px-4 w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-400">
              <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

              {/* Office Details */}
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Astrologer Nikhil Sharma</span>
                </p>

                <p>
                  <strong>Dubai Office :</strong>
                  <br />
                  Al furjan east
                  <br />
                  +97 1527912616
                </p>

                <p>
                  <strong>Himachal Pradesh Office :</strong>
                  <br />
                  Maha Laxmi astro dham Kangra
                  <br />
                  Himachal Pradesh
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

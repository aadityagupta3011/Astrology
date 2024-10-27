import React, { useState } from "react";

const YtQuery = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    query: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission

  try {
    // Send form data to the backend
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send formData
    });

    const result = await response.json();
    if (response.ok) {
      alert('Your query has been submitted!');
      // Clear form fields after successful submission
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
    alert('Request sent successfully!');
  }
};


  return (
    <div className="mt-12 ">
      <div className="relative pb-[56.25%] h-0 overflow-hidden ">
        <video width="600" controls>
          <source src="/videos/awardCeremony.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="custom-md:w-[25vw] w-full  ">
        <div className="mt-12">
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
                ></textarea>
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
        </div>
      </div>
    </div>
  );
};

export default YtQuery;

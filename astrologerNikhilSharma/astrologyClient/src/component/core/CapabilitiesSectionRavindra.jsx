import React from "react";

const CapabilitiesSection = ({
  expertiseItems,
  lifeSpheresItems,
  contactNumber,
  email
}) => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Capabilities, Expertise, and Achievements of Astrologer Nikhil Sharma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our grand and veteran astrologer is well-embellished with rich and
              varied knowledge and practice-experience in the following esoteric
              and sophisticated sciences:
            </h3>
            <ul className="space-y-2">
              {expertiseItems.map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Using perfect and efficacious solutions and therapies based on these sciences,
              he has been tackling problems and disruptive issues arising ever in the
              following spheres of life:
            </h3>
            <ul className="space-y-2">
              {lifeSpheresItems.map((item, index) => (
                <li key={index}>✔️ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border w-full h-5/6">
          <p className="text-lg font-semibold">
            To harness his top-notch and globally admired astrology and other services, interested people or entities may readily phone up over:
            <a href={`tel:${contactNumber}`} className="text-red-500"> {contactNumber}</a>
            ; or cast a self-descriptive email to:
            <a href={`mailto:${email}`} className="text-red-500"> {email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;

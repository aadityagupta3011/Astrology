import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";

const testimonials = [
  { id: 1, videoUrl: "/videos/Testimonial1.mp4", from: "left" },
  { id: 2, videoUrl: "/videos/Testimonial2.mp4" },
  { id: 3, videoUrl: "/videos/Testimonial3.mp4", from: "right" },
  { id: 4, videoUrl: "/videos/Testimonial4.mp4", from: "left" },
  { id: 5, videoUrl: "/videos/Testimonial5.mp4" },
  { id: 6, videoUrl: "/videos/Testimonial6.mp4", from: "right" },
  { id: 7, videoUrl: "/videos/Testimonial7.mp4", from: "left" },
  { id: 8, videoUrl: "/videos/Testimonial8.mp4" },
  { id: 9, videoUrl: "/videos/Testimonial9.mp4", from: "right" },
  { id: 10, videoUrl: "/videos/Testimonial10.mp4", from: "left" },
  { id: 11, videoUrl: "/videos/Testimonial11.mp4" },
  { id: 12, videoUrl: "/videos/Testimonial12.mp4", from: "right" },
  { id: 13, videoUrl: "/videos/Testimonial13.mp4", from: "left" },
];

const Testimonials = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the direction to apply the correct animation
            const direction = entry.target.getAttribute("data-from");
            entry.target.classList.add(direction === "left" ? "animate-slideIn" : "animate-slideInRight");
            entry.target.classList.remove("opacity-0"); // Remove hidden class
            observer.unobserve(entry.target); // Stop observing after animation is applied
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe each video element
    videoRefs.current.forEach((video) => observer.observe(video));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#FF671F]">
        <div className="container mx-auto px-4 py-8 bg-[#FF671F]">
          <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-48 opacity-0 transition-opacity duration-300" // Start hidden until animated
                  data-from={testimonial.from} // Set direction for each video
                  controls
                  src={testimonial.videoUrl}
                  title={`Testimonial ${testimonial.id}`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

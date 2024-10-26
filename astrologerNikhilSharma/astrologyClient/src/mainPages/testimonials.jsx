import React from 'react';
import Navbar from '../Components/Navbar';

const testimonials = [
  { id: 1, videoUrl: '/videos/Testimonial1.mp4' },
  { id: 2, videoUrl: '/videos/Testimonial2.mp4' },
  { id: 3, videoUrl: '/videos/Testimonial3.mp4' },
  { id: 4, videoUrl: '/videos/Testimonial4.mp4' },
  { id: 5, videoUrl: '/videos/Testimonial5.mp4' },
  { id: 6, videoUrl: '/videos/Testimonial6.mp4' },
  { id: 7, videoUrl: '/videos/Testimonial7.mp4' },
  { id: 8, videoUrl: '/videos/Testimonial8.mp4' },
  { id: 9, videoUrl: '/videos/Testimonial9.mp4' },
  { id: 10, videoUrl: '/videos/Testimonial10.mp4' },
  { id: 11, videoUrl: '/videos/Testimonial11.mp4' },
  { id: 12, videoUrl: '/videos/Testimonial12.mp4' },
  { id: 13, videoUrl: '/videos/Testimonial13.mp4' },
];

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <div className='w-full bg-[#FF671F]  '>
        
      <div className="container mx-auto px-4 py-8 bg-[#FF671F] ">
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <video
                className="w-full h-48"
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

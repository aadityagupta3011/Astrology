import React from 'react';

const YouTubeThumbnail = () => {
  return (
    <div className="relative w-full h-60 pb-[56.25%]"> {/* Aspect Ratio Container (16:9) */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/X0gfWK_9Nvo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeThumbnail;

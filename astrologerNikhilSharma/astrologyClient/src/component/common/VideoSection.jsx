import React from 'react'

const VideoSection = ({ videoUrl}) => {
  return (
    <div className="flex-1 pr-6">
    <div className="h-96 mb-4 m-auto">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
   
  </div>
  )
}

export default VideoSection

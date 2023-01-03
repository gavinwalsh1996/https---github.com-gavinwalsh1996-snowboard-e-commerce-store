import React from 'react';

import '../css/Video.scss'

function VideoSection({ videoUrl, caption }) {
  return (
    <div className="video-section">
      <video src={videoUrl} controls />
      <p>{caption}</p>
    </div>
  );
}

export default VideoSection;

// src/VimeoPlayer.jsx

import React, { useRef } from 'react';
import ReactPlayer from 'react-player/vimeo';

const VimeoPlayer = () => {
  // Reference to control the video
  const playerRef = useRef(null);

  // Function to jump to a specific time
  const seekToTime = (seconds) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <video width={800} height={500} controls loop autoPlay muted>
        <source 
        src="https://dvz933i3x82fm.cloudfront.net/20240922_Dueren-Lueneburg_3-2.mp4"  // Replace with your Vimeo video URL
        type='video/mp4'
        />
      </video>
      <ReactPlayer
        ref={playerRef}
        url="https://dvz933i3x82fm.cloudfront.net/20240922_Dueren-Lueneburg_3-2.mp4"  // Replace with your Vimeo video URL
        controls
        width="640px"
        height="360px"
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => seekToTime(2500)}>2500s</button>
        <button onClick={() => seekToTime(1500)}>1500s</button>
      </div>
    </div>
  );
};

export default VimeoPlayer;

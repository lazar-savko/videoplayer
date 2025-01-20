import React, { useState, useRef } from "react";

const LocalVideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState(null); // For storing the selected video file
  const [seekTime, setSeekTime] = useState(""); // For storing the input seconds
  const videoRef = useRef(null); // Reference to the video element

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoSrc(URL.createObjectURL(file));
    }
  };

  const handleSeek = () => {
    const video = videoRef.current;
    if (video && seekTime) {
      video.currentTime = parseFloat(seekTime); // Set the current playback time
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoSrc && (
        <div>
          <video ref={videoRef} controls width="600">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ marginTop: "10px" }}>
            <input
              type="number"
              value={seekTime}
              onChange={(e) => setSeekTime(e.target.value)}
              placeholder="Enter seconds"
              style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={handleSeek} style={{ padding: "5px 10px" }}>
              Seek
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalVideoPlayer;

import React, { useState, useRef, useEffect } from 'react';
import '../Styles/VideoWithProgress.css';

const VideoWithProgress = ({ src, locationKey }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false); // Nuevo estado para controlar si el video está pausado
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [locationKey]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
      setIsPaused(true); // Establece isPaused a true cuando se pausa el video
    } else {
      video.play();
      setIsPaused(false); // Establece isPaused a false cuando se reanuda el video
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`video-container ${isPaused ? 'paused' : ''}`}> {/* Agrega la clase 'paused' cuando el video está pausado */}
      <video ref={videoRef} autoPlay muted loop onClick={handleVideoClick}>
        <source src={src} type="video/mp4" />
      </video>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        <span className='state-paused' style={{ opacity: isPaused ? 1 : 0 }}>PAUSED</span>
      </div>
    </div>
  );
};

export default VideoWithProgress;

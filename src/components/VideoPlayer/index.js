import React,{useEffect,useRef, useState} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import 'videojs-landscape-fullscreen'

export const VideoJS = ( props ) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady, currentTime, pauseTime} = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        player.landscapeFullscreen({
          fullscreen: {
            enterOnRotate: true,
            alwaysInLandscapeMode: true,
            iOS: true
          }
        });        
        onReady && onReady(player);
      });
    } else {
      // you can update player here

    }
  }, [options, videoRef]);

  useEffect(() => {
    if (playerRef.current && pauseTime > currentTime) {
      const player = playerRef.current;
      const handleBar = function() {
        if (player.currentTime() >= pauseTime) {
          player.pause();
        } 
      };
      player.on('timeupdate', handleBar);
      player.currentTime(currentTime);
      player.play();

      return () => { player.off('timeupdate',handleBar) }
    }
  }, [currentTime, pauseTime])
  
  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;
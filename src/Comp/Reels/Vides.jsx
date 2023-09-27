import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

function Vides({ url, setVideoRef, autoplay }) {

    const videoRef = useRef(null);

    useEffect(() => {
        if (autoplay) {
            videoRef.current.play().catch((err)=>console.log(err))

        }
    }, [autoplay]);

    const [isPlaying, setIsPlaying] = useState(false);

    const onVideoPress = () => {
      if (!isPlaying) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error(error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        const videoElement = videoRef.current;
        videoElement.muted = !videoElement.muted;
        setIsMuted(!isMuted);
      };
    return (
        <div className="video-player">
            <video style={{ width: "400px", height: '600px' }}
                className="player bg-white object-fill cursor-pointer "
                onClick={onVideoPress}
                ref={(ref) => {
                    videoRef.current = ref;
                    setVideoRef(ref);
                }}
                loop
                 
                src={url}
            ></video>
            {/* <button onClick={toggleMute}>Mute</button> */}
        </div>
    );

}

export default Vides
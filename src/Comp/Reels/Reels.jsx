import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Vides from './Vides';
import { useInView } from 'react-intersection-observer';
import { MyContext } from '../Api/UserApi';

function Reels() {
    const { Data } = useContext(MyContext)
    const videoRefs = useRef([]);
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this value to change the scroll trigger point
        };

        // This function handles the intersection of videos
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const videoElement = entry.target;
                    videoElement.play().catch((err) => console.log(err))
                } else {
                    const videoElement = entry.target;
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // We observe each video reference to trigger play/pause
        videoRefs.current.forEach((videoRef) => {
            observer.observe(videoRef);
        });

        // We disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [Data]);

    // This function handles the reference of each video
    const handleVideoRef = (index) => (ref) => {
        videoRefs.current[index] = ref;
    };



    return (
        <div className='flex flex-col gap-2 items-center my-3 '>
            {
                Data && Data.length > 0 && Data?.map((data, index) => (
                    <Vides
                        key={index}
                        url={data?.play}
                        setVideoRef={handleVideoRef(index)}
                        autoplay={index === 0}
                    />
                ))
            }


        </div>
    )
}

export default Reels
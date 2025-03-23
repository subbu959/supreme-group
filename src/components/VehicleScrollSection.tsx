"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import car from "../assets/car-video1.mp4";
import truck from "../assets/truck-video1.mp4";
import cabin from "../assets/cabin1.mp4";
import exterior from "../assets/exterior.mp4";
import trunk from "../assets/trunk.mp4";

const sections = [
  {
    id: "passenger",
    title: "Passenger Vehicles",
    subtitle: "Revving up innovation from interior to exterior.",
    videos: [car, cabin, exterior],
  },
  {
    id: "commercial",
    title: "Commercial Vehicles",
    subtitle: "Advancing engineering for heavy-duty vehicles.",
    videos: [truck, cabin, trunk],
  },
];

export default function VehicleScrollSection() {
  const [activeSection,] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  // const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const scrollToSection = (sectionIndex: number) => {
  //   const scrollY = (1 + sectionIndex) * window.innerHeight; // +1 accounts for the Hero section
  //   window.scrollTo({
  //     top: scrollY,
  //     behavior: "smooth",
  //   });
  // };

 


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      isPlaying ? video.play() : video.pause();

      const handleEnded = () => {
        setActiveVideoIndex((prev) => {
          const next = prev + 1;
          return next < sections[activeSection].videos.length ? next : 0;
        });
      };

      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [activeSection, activeVideoIndex, isPlaying]);

  // const togglePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     if (isPlaying) {
  //       video.pause();
  //     } else {
  //       video.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <>
      {/* Intro Section */}
      <section className="h-screen snap-start flex items-center justify-center text-center px-6 bg-black text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Evolving the Drive with 360-Degree Comprehensive Solutions
          </h1>
          <p className="text-xl text-gray-300">Scroll down to explore</p>
        </div>
      </section>
  
      {/* Vehicle Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          className="h-screen snap-start flex flex-col md:flex-row bg-black text-white"
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 py-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
            <p className="text-lg text-gray-400">{section.subtitle}</p>
          </div>
  
          {/* Video Player */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-6">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                key={section.videos[activeVideoIndex]}
                src={section.videos[activeVideoIndex]}
                autoPlay
                muted
                playsInline
                onEnded={() => {
                  const next = activeVideoIndex + 1;
                  setActiveVideoIndex(
                    next < section.videos.length ? next : 0
                  );
                }}
                className="w-full aspect-video object-cover"
              />
            </div>
  
            {/* Dots + Play/Pause */}
            <div className="flex gap-5 items-center justify-center mt-4">
              <div className="flex space-x-2">
                {section.videos.map((_, vidIndex) => (
                  <div
                    key={vidIndex}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeVideoIndex === vidIndex
                        ? "bg-white scale-125"
                        : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  isPlaying ? video.pause() : video.play();
                  setIsPlaying(!isPlaying);
                }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl pl-1" />}
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
  
}

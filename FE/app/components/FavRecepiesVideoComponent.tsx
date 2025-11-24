"use client";
import { useRef } from "react";
import { StrapiVideo } from "../lib/strapi-video";
import { FavData } from "../types";

function FavRecepiesVideoComponent({ data }: { data: FavData }) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="flex md:max-w-6xl mx-auto lg:px-0">
      {data.favComponents.map((component, index) => (
        <div
          key={component.id}
          className="min-w-[260px] max-w-[260px] shrink-0 p-2"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {/* IMAGE WRAPPER */}
          <div className="relative rounded-xl border overflow-hidden shadow-md group">
            <StrapiVideo
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={component.Image.url}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              loop={true}
              muted={true}
            />

            {/* PLAY ICON */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
              <button className="bg-black/40 rounded-full px-3 py-1 text-white text-xs uppercase tracking-wide">
                Play
              </button>
            </div>
          </div>

          {/* TITLE */}
          <h3 className="font-semibold mt-3 text-center text-sm">
            {component.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default FavRecepiesVideoComponent;

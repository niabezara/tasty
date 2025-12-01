"use client";
import { useRef } from "react";
import { StrapiVideo } from "../lib/strapi-video";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { VideoRecipeItem } from "../types/FavVideoTypes";

function FavRecepiesVideoComponent({ data }: { data: VideoRecipeItem[] }) {
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
    <Carousel className="w-full max-w-6xl mx-auto lg:px-0">
      <CarouselContent>
        {data?.map((component, index) => (
          <CarouselItem
            key={component.id}
            className=" max-w-[230px] pt-5 shrink-0 p-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* IMAGE WRAPPER */}
            <div
              className=" rounded-xl border video-play-overlay border-black overflow-hidden shadow-md group relative group

  "
            >
              <StrapiVideo
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={component?.video[0]?.url}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                loop={true}
                muted={true}
              />

              {/* PLAY ICON */}
              {/* <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                <button className="bg-black/40 rounded-full px-3 py-1 text-white text-xs uppercase tracking-wide">
                  Play
                </button>
              </div> */}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold mt-3 text-center text-lg font-domaine">
              {component.title}
            </h3>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden lg:flex left-[-15px]" />
      <CarouselNext className="hidden lg:flex right-[-15px]" />
    </Carousel>
  );
}

export default FavRecepiesVideoComponent;

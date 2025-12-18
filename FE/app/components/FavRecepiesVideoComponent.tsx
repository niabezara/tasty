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
import { VideoRecipeItem } from "../types/favVideoTypes";
import { Icons } from "./Icons";

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
      <CarouselContent className="">
        {data?.map((component, index) => (
          <CarouselItem
            key={component.id}
            className="z-10 max-w-[236px] pt-5 shrink-0 p-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* OUTER WRAPPER */}
            <div className="relative">
              {/* IMAGE WRAPPER */}
              <div className="rounded-xl border video-play-overlay border-black overflow-hidden shadow-md group relative">
                <StrapiVideo
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={component?.video[0]?.url}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  loop={true}
                  muted={true}
                />
              </div>

              {/* PLAY ICON */}
              <div className="w-full absolute justify-center text-white items-center flex text-center -bottom-2 z-100">
                <span className="py-2 px-1.5 bg-[#734060] leading-0.5 font-arvo rounded-[10px] text-[10px]">
                  PLAY
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="font-semibold mt-3 text-center text-lg font-domaine">
              {component.title}
            </h3>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden lg:flex left-[-15px]">
        <Icons.arrow />
      </CarouselPrevious>
      <CarouselNext className="hidden lg:flex -right-5">
        <Icons.arrow className="rotate-180" />
      </CarouselNext>
    </Carousel>
  );
}

export default FavRecepiesVideoComponent;

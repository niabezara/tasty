import { forwardRef } from "react";
import { getStrapiMedia } from "./utils";

interface StrapiVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export const StrapiVideo = forwardRef<HTMLVideoElement, StrapiVideoProps>(
  (
    {
      src,
      className,
      autoPlay = false,
      controls = false,
      loop = false,
      muted = false,
    },
    ref
  ) => {
    const videoUrl = getStrapiMedia(src);
    if (!videoUrl) return null;

    return (
      <video
        ref={ref}
        src={videoUrl}
        className={className}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
      />
    );
  }
);

StrapiVideo.displayName = "StrapiVideo";

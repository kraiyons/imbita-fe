"use client";
import { useState, useRef } from "react";
import SVGPause from "./SVGPause";
import SVGMute from "./SVGMute";
import SVGVolume from "./SVGVolume";

type TProps = {
  media: string;
};

export default function VideoHeader({ media }: TProps) {
  const [state, setState] = useState({ isPlaying: true, isMuted: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  const _handleVideoClick = (e: MouseEvent<HTMLDivElement>) => {
    e.current.preventBubble();
    if (!videoRef.current) return;
    const isPlaying = !videoRef.current.paused;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setState((pState) => ({ ...pState, isPlaying }));
  };

  const _handleUnmute = (e) => {
    e.preventBubble();
    if (!videoRef.current) return;
    const isMuted = !videoRef.current.muted;
    videoRef.current.muted = isMuted;
    setState((pState) => ({ ...pState, isMuted }));
  };

  return (
    <div className="flex items-center justify-center mb-10 -rotate-2 will-change-transform relative">
      <div
        onClick={_handleUnmute}
        className="absolute bottom-0 right-0 z-20 border"
      >
        {videoRef.current?.muted ? <SVGMute /> : <SVGVolume />}
      </div>
      <div
        className="relative z-10 h-auto w-[300px] shadow-2xl rounded-lg bg-white p-4 overflow-hidden"
        onClick={_handleVideoClick}
      >
        {!state && (
          <div className="bg-gray-700/20 w-full h-full text-white absolute top-0 left-0">
            <div className="absolute top-[calc(50%-12px)] left-[calc(50%-12px)]">
              <SVGPause />
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="outline-[0.5px] outline-black"
        >
          <source src={media} type="video/mp4" />
          Your browser does not support the videos.
        </video>
      </div>
    </div>
  );
}

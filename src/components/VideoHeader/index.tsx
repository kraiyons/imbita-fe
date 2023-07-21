"use client";
import { useState, useRef, useEffect } from "react";
import SVGPause from "./SVGPause";
import SVGMute from "./SVGMute";
import SVGVolume from "./SVGVolume";

type TProps = {
  media: string;
};

export default function VideoHeader({ media }: TProps) {
  const [state, setState] = useState({ isPlaying: true, isMuted: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  const _handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const isPlaying = !videoRef.current.paused;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setState((pState) => ({ ...pState, isPlaying: !isPlaying }));
  };

  const _handleUnmute = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const isMuted = !videoRef.current.muted;
    videoRef.current.muted = isMuted;
    setState((pState) => ({ ...pState, isMuted }));
  };

  useEffect(() => {
    console.log({ state, playing: !videoRef?.current?.paused });
  });

  return (
    <div className="flex items-center justify-center mb-10 -rotate-2 will-change-transform relative">
      <div className="relative z-10 h-auto w-[300px] shadow-2xl rounded-lg bg-white p-4 overflow-hidden">
        <div
          onClick={_handleUnmute}
          className="absolute bottom-5 right-5 h-10 w-10 z-20 text-white hover:text-gray-300 cursor-pointer"
        >
          {state.isMuted ? <SVGMute /> : <SVGVolume />}
        </div>
        <div
          className="w-full h-full z-10 absolute left-0 top-0 "
          onClick={_handleVideoClick}
        ></div>
        {!state.isPlaying && (
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

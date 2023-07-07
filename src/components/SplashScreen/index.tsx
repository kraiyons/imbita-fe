"use client";
import { useState } from "react";

type TProps = {
  media: string;
};

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path
      fill="currentColor"
      d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
    />
  </svg>
);
export default function SplashScreen({ media }: TProps) {
  const [show, setShow] = useState(true);
  return !show ? null : (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
      <div
        id="overlay"
        className="w-full h-full bg-white/30 absolute top-0 left-0 backdrop-blur-sm"
      ></div>
      <div
        id="modal"
        className="w-fit h-fit p-4 bg-white relative shadow-2xl rounded-lg"
      >
        <div
          onClick={() => setShow(false)}
          className="z-10 h-6 w-6 p-1 rounded- absolute right-5 top-5 text-white hover:bg-slate-500/30 cursor-pointer"
        >
          <CloseIcon />
        </div>
        <video width="320" height="240" controls autoPlay loop>
          <source src={media} type="video/mp4" />
          Your browser does not support the videos.
        </video>
      </div>
    </div>
  );
}

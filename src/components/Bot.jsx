import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";



const Bot = () => {
  return (
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600
      w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
    <IoChatbubbleEllipses />
      </div>
  );
};

export default Bot;

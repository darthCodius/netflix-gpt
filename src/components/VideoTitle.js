import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="flex flex-col gap-2 top-14 md:gap-6 lg:gap-6 xl:gap-6 w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/4 ml-10 absolute md:top-24 lg:top-[15rem] xl:top-[25rem]">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-stone-100">
        {title}
      </h1>
      <p className="font-semibold text-xs  md:text-lg lg:text-xl xl:text-xl text-stone-100">
        {overview}
      </p>
      <div className="flex gap-5">
        <button className="flex  gap-1 items-center justify-center font-semibold text-xs md:text-lg px-3 py-3 lg:text-xl xl:text-2xl bg-stone-100 lg:py-3 lg:px-8 xl:py-3 xl:px-8 rounded-md  hover:bg-opacity-70">
          <IoMdPlay className="inline-block" />
          Play
        </button>
        <button className="flex gap-1 items-center justify-center font-semibold text-xs md:text-lg px-3 py-3 lg:text-xl xl:text-2xl bg-black lg:py-3 lg:px-8 xl:py-3 xl:px-8 rounded-md bg-opacity-50 text-stone-100 hover:bg-opacity-30">
          <IoIosInformationCircleOutline className="inline-block" />
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

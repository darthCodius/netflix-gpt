import { IMG_CDN_URL } from "../utils/constants";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { SlArrowDownCircle } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { SlLike } from "react-icons/sl";

import { GiRoundStar } from "react-icons/gi";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [moreData, setMoreData] = useState(false);

  const handleMoreData = () => {
    setMoreData((curr) => !curr);
  };

  return (
    <div
      onMouseEnter={handleMoreData}
      onMouseLeave={handleMoreData}
      className="flex flex-col rounded-lg cursor-pointer hover:scale-[1.2] hover:z-50 transition-all duration-300 bg-black relative"
    >
      <div className="w-[235px] h-[140px] lg:w-[300px] lg:h-[160px] xl:w-[300px] xl:h-[160px] relative mb-4 rounded-lg">
        <h1 className="absolute top-[80%] lg:top-[75%] xl:text-lg  bg-gradient-to-r from-black w-full">
          {movie?.title}
        </h1>
        <img
          className="w-full h-full object-cover rounded-t-md"
          alt="poster"
          src={`${IMG_CDN_URL}${movie?.backdrop_path}`}
        />
      </div>
      {moreData && (
        <div className="flex flex-col gap-4 rounded-b-md absolute top-[90%]  bg-black w-[235px] p-2 lg:w-[300px]  xl:w-[300px]  ">
          <div className="flex justify-between text-2xl lg:text-4xl xl:text-4xl ">
            <div className="flex gap-2 items-center">
              <span className="cursor-pointer">
                <BsFillPlayCircleFill />
              </span>
              <span className="cursor-pointer ">
                <SlPlus />
              </span>
              <span className="cursor-pointer">
                <SlLike />
              </span>
            </div>
            <div className="cursor-pointer">
              <SlArrowDownCircle />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[#46d369] flex items-center">
              <span>{movie?.vote_average?.toFixed(1)}</span>
              <span>
                <GiRoundStar />
              </span>
            </span>

            <span className="border px-1">HD</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;

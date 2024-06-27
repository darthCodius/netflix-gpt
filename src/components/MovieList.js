import MovieCard from "./MovieCard";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const MovieList = ({ title, movies }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const handleNext = () => {
    if (end === movies.length) {
      setStart(0);
      setEnd(5);
    } else {
      setStart((curr) => curr + 1);
      setEnd((curr) => curr + 1);
    }
  };

  const handlePrevious = () => {
    if (start === 0) {
      setStart(movies.length - 5);
      setEnd(movies.length);
    } else {
      setStart((curr) => curr - 1);
      setEnd((curr) => curr - 1);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl ml-14 lg:text-4xl">{title}</h1>
        <div className="flex gap-3 flex-wrap ">
          <span className={"self-center mr-4 "}>
            <button
              onClick={handlePrevious}
              className="lg:text-3xl hover:text-[rgba(255,255,255,0.6)] transition-all duration-200"
            >
              <GrPrevious />
            </button>
          </span>
          {movies?.slice(start, end).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
          <span className="self-center ml-4">
            <button
              onClick={handleNext}
              className="lg:text-3xl hover:text-[rgba(255,255,255,0.6)] transition-all duration-200"
            >
              <GrNext />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import MovieCard from "./MovieCard";
import React from "react";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl  lg:text-4xl">{title}</h1>
        <div className="flex gap-3 flex-wrap">
          {movies?.slice(1, 6).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl  lg:text-4xl">{title}</h1>
        <div className="flex gap-3 flex-wrap">
          {movies?.slice(1, 6).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl  lg:text-4xl">{title}</h1>
        <div className="flex gap-3 flex-wrap">
          {movies?.slice(1, 6).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

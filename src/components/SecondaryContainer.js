import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <>
      <div className="bg-black text-stone-50 mt-10 mx-10">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>
    </>
  );
};

export default SecondaryContainer;

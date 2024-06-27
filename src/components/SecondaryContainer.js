import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies.popularMovies);

  return (
    <>
      <div className="bg-black bg-opacity-0 text-stone-50 mt-20 mx-10 z-50">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.popularMovies} />
      </div>
    </>
  );
};

export default SecondaryContainer;

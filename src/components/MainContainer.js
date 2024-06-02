import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return <div>Main Container</div>;
};

export default MainContainer;

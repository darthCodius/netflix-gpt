import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
    Main Video Container
      -Video Bg
      -Video Title
      -Play Button - More Info


    Movie Lists Container
      -MovieLists * N
        -MovieCards * N
*/}
    </div>
  );
};

export default Browse;

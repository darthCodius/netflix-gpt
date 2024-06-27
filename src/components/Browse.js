import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
    Main Video Container
      -Video Bg
      -Video Title
      -Play Button - More Info

    Movie Lists Container
      -MovieLists * N
        -MovieCards * N
*/}
      <Footer />
    </div>
  );
};

export default Browse;

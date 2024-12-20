import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>

      {/*
      Main Container
        - video background
        - videoTitle
      Secondary container
        - moviesList * n 
          - movieCard * n
      
      */}
    </div>
  );
};

export default Browse;

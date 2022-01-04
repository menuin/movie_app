import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MovieInfo from "./components/MovieInfo";

const Fullpage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [crntMovie, setCrntMovie] = useState(0);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const changeCard = async (index) => {
    console.log(index);
    setCrntMovie(index);
    console.log(crntMovie);
    setTimeout(() => {
      console.log(movies[crntMovie]);
      console.log(crntMovie);
    }, 4000);
  };

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <App
                isLoading={isLoading}
                movies={movies}
                changeCard={changeCard}
              />
              <button onClick={() => fullpageApi.moveSectionDown()}>
                <FontAwesomeIcon icon={faAngleDown} size="4x" />
              </button>
            </div>
            <div className="section">
              {/* {crntMovie} */}
              {/* {movies[crntMovie].summary} */}
              {/* {crntMovie}
              {movies[1]?.summary}
              {movies?.map((movie) => {
                return <div>hi </div>;
              })} */}
              {/* {movies[1] ? <MovieInfo movie={movies[1]} /> : <div></div>} */}
              {/* <MovieInfo movie={movies[1]} /> */}
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

ReactDOM.render(<Fullpage />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById('root'));

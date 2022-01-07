import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";
import Main from "./Main";

const SectionContainer = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    console.log(movies);

    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SectionContainer>
      {isLoading ? (
        // not loaded
        <Loading />
      ) : (
        // loaded
        <Main movies={movies} />
      )}
    </SectionContainer>
  );
};

export default Home;

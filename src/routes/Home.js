import React from "react";
import axios from "axios";
import SimpleSlider from "../components/SimpleSlider";
import styled, { keyframes } from "styled-components";

const loadingAnim = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity : 0;
  }
`;
const SectionContainer = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  margin-right: 50px;
`;
const Loader = styled.div`
  /* display: flex;
  align-items: center; */
`;
const LoadingDiv = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20pt;
  animation: ${loadingAnim} 1.6s infinite;
  /* width: 70%;
  display: flex;
  align-items: center; */
`;
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies });
    this.setState({ isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <SectionContainer>
        {isLoading ? (
          // not loaded
          <Loader>
            <LoadingDiv>Loading...</LoadingDiv>
          </Loader>
        ) : (
          // loaded

          <div>
            <SimpleSlider movies={movies} />
          </div>
        )}
      </SectionContainer>
    );
  }
}

export default Home;

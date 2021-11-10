import React from "react";
import axios from "axios";
import SimpleSlider from "../components/SimpleSlider";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin-top: 50px;
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
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          // loaded
          <SimpleSlider movies={movies} />
        )}
      </SectionContainer>
    );
  }
}

export default Home;

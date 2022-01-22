import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import styled from "styled-components";

const FullBodyContainer = styled.div`
  position: relative;
  height: 100%;
`;
function App({ isLoading, movies, changeCard }) {
  return (
    <FullBodyContainer>
      <HashRouter>
        <Navigation />
        <Route
          path="/"
          exact={true}
          render={() => (
            <Home
              isLoading={isLoading}
              movies={movies}
              changeCard={changeCard}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/movie_detail" component={Detail} />
      </HashRouter>
    </FullBodyContainer>
  );
}

export default App;

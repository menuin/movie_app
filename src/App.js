import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import styled from "styled-components";

const FullBodyContainer = styled.div`
  margin: 0px 50px;
`;
function App() {
  return (
    <FullBodyContainer>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie_detail" component={Detail} />
      </HashRouter>
    </FullBodyContainer>
  );
}

export default App;

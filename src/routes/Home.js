import React, { useEffect, useState } from "react";
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
const Loader = styled.div``;
const LoadingDiv = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20pt;
  animation: ${loadingAnim} 1.6s infinite;
`;
const MainContainer = styled.div`
  margin-top: 60px;
`;
const Home = ({ isLoading, movies, changeCard }) => {
  return (
    <SectionContainer>
      {isLoading ? (
        // not loaded
        <Loader>
          <LoadingDiv>Loading...</LoadingDiv>
        </Loader>
      ) : (
        // loaded
        // 여기에 슬라이드 컴포넌트가 들어가야할 것 같은데..
        <MainContainer>
          <SimpleSlider movies={movies} changeCard={changeCard} />
        </MainContainer>
      )}
    </SectionContainer>
  );
};

export default Home;

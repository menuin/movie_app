import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FaAngleDown } from "react-icons/fa";
import SimpleSlider from "../components/SimpleSlider";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-top: 150px;
`;

const AngleContainer = styled.button`
  background: transparent;
  border: none;
`;
const SeeMoreContainer = styled.div`
  position: absolute;
  bottom: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 25px;
`;
function Main({ movies, changeCard }) {
  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      verticalCentered={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <MainContainer>
                <SimpleSlider movies={movies} changeCard={changeCard} />
              </MainContainer>
              <SeeMoreContainer onClick={() => fullpageApi.moveSectionDown()}>
                <AngleContainer>
                  <FaAngleDown size="70" />
                </AngleContainer>
                <div>find more info</div>
              </SeeMoreContainer>
            </div>
            <div className="section">hi</div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Main;

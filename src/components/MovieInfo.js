import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Animated from "react-mount-animation";
import styled, { keyframes } from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ArrowContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
`;
const containerAppear = keyframes`
  from {
    opacity:0;
    transform : translateY(-5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const InfoContainer = styled.div`
  text-align: center;
  margin: 0px 270px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Noticia Text", serif;
  font-size: 50px;
`;
const Splitter = styled.div`
  height: 6px;
  background-color: black;
`;
const SmallInfo = styled.div`
  margin-top: 5px;
  font-family: "Roboto Condensed", sans-serif;
`;

function MovieInfo({
  movie: { id, year, title, runtime, mpa_rating, summary },
}) {
  return (
    <div>
      <InfoContainer>
        <Title>
          {title}
          <Splitter></Splitter>
        </Title>

        <SmallInfo>
          {year} | {runtime} mins
        </SmallInfo>
      </InfoContainer>
    </div>
  );
}

export default MovieInfo;

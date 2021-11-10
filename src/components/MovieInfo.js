import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  text-align: center;
  margin: 0px 100px;
`;
const Title = styled.div`
  font-family: "Merriweather", serif;
  font-size: 40pt;
  display: inline-block;
`;
const Splitter = styled.div`
  height: 5px;
  background-color: black;
`;
const SmallInfo = styled.div`
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
`;
const SummaryTitle = styled.div`
  font-family: "Merriweather", serif;
  font-size: 30pt;
`;
const Summary = styled.div``;

function MovieInfo({
  movie: { id, year, title, runtime, mpa_rating, summary },
}) {
  return (
    <InfoContainer>
      <Title>
        {title}
        <Splitter></Splitter>
      </Title>

      <SmallInfo>
        {year} | {runtime} mins
      </SmallInfo>
      <SummaryTitle>Summary</SummaryTitle>
      <Summary>{summary}</Summary>
      <FontAwesomeIcon icon={"angle-down"} color="black" />
    </InfoContainer>
  );
}

export default MovieInfo;

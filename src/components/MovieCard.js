import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;
const CardPoster = styled.img`
  width: 100%;
`;
function MovieCard({ poster }) {
  return (
    <CardContainer>
      <CardPoster src={poster} />
    </CardContainer>
  );
}

export default MovieCard;

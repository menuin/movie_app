import React from "react";
import styled from "styled-components";

const CardPoster = styled.img`
  width: 80%;
`;
function MovieCard({ poster }) {
  return <CardPoster src={poster} />;
}

export default MovieCard;

import React from "react";
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
const Loader = styled.div``;
const LoadingDiv = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20pt;
  animation: ${loadingAnim} 1.6s infinite;
`;

function Loading() {
  return (
    <Loader>
      <LoadingDiv>Loading...</LoadingDiv>
    </Loader>
  );
}

export default Loading;

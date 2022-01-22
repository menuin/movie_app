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
const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingDiv = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20pt;
  color: #9d9d9d;
  width: 100%;
  text-align: center;
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

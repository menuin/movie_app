import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #000082;
  height: 100%;
`;
const ContentContainer = styled.div`
  padding-top: 150px;
  padding-left: 100px;
  font-family: "Ubuntu Mono", monospace;
  color: white;
`;
const Emo = styled.div`
  font-size: 188px;
`;
const Description = styled.div`
  font-size: 21px;
  margin-top: 70px;
`;
function About(props) {
  return (
    <AboutContainer>
      <ContentContainer>
        <Emo>:)</Emo>
        <Description>
          No problem has been detected and windows has not been shut down to
          prevent damage
          <br />
          to your computer
          <br />
          <br />
          Keep your computer clean!
          <br />
          <br />
          If this is the first time you've seen this screen,
          <br />
          or if this screen appears again, contact :
          <br />
          <br /> menuin.mik@gmail.com
          <br />
          Made by Menuin Kim
        </Description>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;

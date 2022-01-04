import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftNavDiv = styled.div`
  display: flex;
`;

const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #dadada;
  height: 55px;
  align-items: center;

  font-size: 12pt;
  position: fixed;
  top: 0;
`;

const NavItem = styled.div`
  width: 50px;
  height: 33px;
  border-radius: 23px;
  margin-left: 25px;
`;
const HomeDiv = styled(NavItem)`
  background-color: #6a79ff;

  &:hover {
    background-color: #3a4288;
  }
`;

const AboutDiv = styled(NavItem)`
  background-color: #1ec675;

  &:hover {
    background-color: #167d4c;
  }
`;
const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #8f8f8f;
  font-family: "Roboto Condensed", sans-serif;
`;
function Navigation() {
  return (
    <NavigationDiv>
      <LeftNavDiv>
        <StyledLink to="/">
          <HomeDiv></HomeDiv>
        </StyledLink>

        <StyledLink to="/about">
          <AboutDiv></AboutDiv>
        </StyledLink>
      </LeftNavDiv>
    </NavigationDiv>
  );
}

export default Navigation;

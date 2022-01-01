import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightNavDiv = styled.div`
  display: flex;
`;
const NavTitle = styled.div`
  /* font-weight: bold; */
  margin-left: 40px;
  align-items: center;

  color: #757575;
  & span {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 13pt;
  }
`;
const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #e2e2e2;
  height: 30px;
  align-items: center;
  box-shadow: 0px 3px 5px #d3d3d3;
  font-size: 12pt;
`;
const NavItemDiv = styled.div`
  margin-right: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #8f8f8f;
  font-family: "Roboto Condensed", sans-serif;
`;
function Navigation() {
  return (
    <NavigationDiv>
      <NavTitle>
        <span>HERE ARE SOME YTS TOP RATED MOVIES FOR YOU ...</span>
      </NavTitle>
      <RightNavDiv>
        <NavItemDiv>
          <StyledLink to="/">Home</StyledLink>
        </NavItemDiv>
        <NavItemDiv>
          <StyledLink to="/about">About</StyledLink>
        </NavItemDiv>
      </RightNavDiv>
    </NavigationDiv>
  );
}

export default Navigation;

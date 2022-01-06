import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeOutlined } from "@ant-design/icons";
import { BsInfoLg } from "react-icons/bs";

const LeftNavDiv = styled.div`
  display: flex;
`;
const RightNavDiv = styled.div`
  display: flex;
  margin-right: 15px;
`;

const NavigationDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #e5e5e5;
  height: 55px;
  align-items: center;

  font-size: 12pt;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const NavItem = styled.div`
  width: 50px;
  height: 33px;
  border-radius: 23px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
          <HomeDiv>
            <HomeOutlined />
          </HomeDiv>
        </StyledLink>

        <StyledLink to="/about">
          <AboutDiv>
            <BsInfoLg />
          </AboutDiv>
        </StyledLink>
      </LeftNavDiv>
      <RightNavDiv>
        <img className="ytsImg" alt="yts" src="img/yts.png" width="70px" />
      </RightNavDiv>
    </NavigationDiv>
  );
}

export default Navigation;

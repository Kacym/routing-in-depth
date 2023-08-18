import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <StyledHeader>
      <HeaderNavBar>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "defaultNav activeNav";
            }
            return "defaultNav";
          }}
          to="/courses/materials"
        >Materials</NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "defaultNav activeNav";
            }
            return "defaultNav";
          }}
          to="/courses/student"
        >Student</NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "defaultNav activeNav";
            }
            return "defaultNav";
          }}
          to="/courses/ratings"
        >Ratings</NavLink>
      </HeaderNavBar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #2c87d9;
  width: 75%;
  height: 18vh;
  padding-left: 25px;
  border: solid;
`;

const HeaderNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 35%;
`

export default Header;

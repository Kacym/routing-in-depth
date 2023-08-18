import React from "react";
import styled from "styled-components";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <StyledSideBar>
      <LogoText>LOGO</LogoText>

      <StyledList>
        <NavBar>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "mainClass activeClass";
              }
              return "mainClass";
            }}
            to="/courses"
          >
            Courses
          </NavLink>
        </NavBar>
        <NavBar>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "mainClass activeClass";
              }
              return "mainClass";
            }}
            to="/anouncements"
          >
            Anouncements
          </NavLink>
        </NavBar>
        <NavBar>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "mainClass activeClass";
              }
              return "mainClass";
            }}
            to="/notifications"
          >
            Notifications
          </NavLink>
        </NavBar>
        <NavBar>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "mainClass activeClass";
              }
              return "mainClass";
            }}
            to="/schedule"
          >
            Schedule
          </NavLink>
        </NavBar>
      </StyledList>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.aside`
  background-color: rgb(211, 211, 211);
  height: 100vh;
  width: 25%;
  padding-top: 20px;
`;

const LogoText = styled.h1`
  color: #6e17b6;
  text-align: center;
  font-size: 30px;
  margin-bottom: 70px;
  margin-top: 30px;
`;
const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  background-color: white;
  margin: 0 auto;
  padding: 0;
`;
const NavBar = styled.li`
  width: 100%;
  margin: 0 auto;
`;
export default SideBar;

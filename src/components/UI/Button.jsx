import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      mTop={props.mTop}
      mBottom={props.mBottom}
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      color={props.color}
      bgColor={props.bgColor}
      fontSize={props.fontSize}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.bgColor || "#15AE9E"};
  font-size: ${(props) => props.fontSize || "16px"};

  border-radius: 25px;
  border: none;

  margin-top: ${(props) => props.mTop};
  margin-bottom: ${(props) => props.mBottom};
  padding: 15px 20px;
  text-align: center;

  cursor: pointer;
`;

export default Button;

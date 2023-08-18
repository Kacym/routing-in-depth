import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      width={props.width}
      height={props.height}
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

  background-color: ${(props) => props.bgColor || "#15AE9E"};
  font-size: ${(props) => props.fontSize || "16px"};

  border-radius: 25px;
  border: none;

  padding: 15px 20px;
  text-align: center;

  cursor: pointer;
`;

export default Button;

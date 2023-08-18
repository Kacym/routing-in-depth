import React from "react";
import { styled } from "styled-components";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const SchedulePage = () => {
  return (
    <StyledSchedulePage>
      <ContentBox>
        <h2 style={{marginBottom: "20px"}}>Schedule page</h2>
        <Link to="/notifications">
          <Button width="300px" title="Go to Notifications page" />
        </Link>
      </ContentBox>
    </StyledSchedulePage>
  );
};

const StyledSchedulePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 75%;
  height: 100vh;

  margin: 0 auto;

  background-color: #e3e7ed;
`;

const ContentBox = styled.div`
  width: 95%;
  height: 85vh;

  padding: 20px 0 0 20px;
  background-color: white;
`;
export default SchedulePage;

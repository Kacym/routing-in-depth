import React from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";

const RatingsPage = () => {
  return (
    <GeneralBox>
      <Header width="100%"/>
      <StyledRatingsPage>
          <ContentBox>
            <h2>Ratings page</h2>
          </ContentBox>
      </StyledRatingsPage>
    </GeneralBox>
  );
};

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`

const StyledRatingsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e3e7ed;
  height: 82vh;
`;

const ContentBox = styled.div`
  width: 95%;
  height: 70vh;

  padding: 20px 0 0 20px;
  background-color: white;
`;
export default RatingsPage;

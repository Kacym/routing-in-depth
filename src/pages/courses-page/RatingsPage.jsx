import React from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";

const RatingsPage = () => {
  return (
    <>
      <Header />
      <StyledRatingsPage>
          1
      </StyledRatingsPage>
    </>
  );
};

const GeneralBox = styled.div`
  /* display: flex;
  flex-direction: column; */

  /* width: 70%;
  border: solid; */
`

const StyledRatingsPage = styled.div`
  background-color: #e3e7ed;
  display: block;
`;

const ContentBox = styled.div`
  width: 95%;
  height: 85vh;

  padding: 20px 0 0 20px;
  background-color: white;
`;
export default RatingsPage;

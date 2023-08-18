import React from "react";
import { styled } from "styled-components";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const NotificationsPage = () => {
  return (
    <StyledNotificationsPage>
      <ContentBox>
        <h2 style={{marginBottom: "20px"}}>Notifications page</h2>
        <Link to="/anouncements">
          <Button width="300px" title="Go to Anouncements page" />
        </Link>
      </ContentBox>
    </StyledNotificationsPage>
  );
};

const StyledNotificationsPage = styled.div`
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
export default NotificationsPage;

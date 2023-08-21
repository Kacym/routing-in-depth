import React from "react";
import { styled } from "styled-components";
import Header from "../../../components/header/Header";
import { DUMMY_STUDENTS } from "../StudentPage";
import { useParams } from "react-router-dom";

const StudentDetailsPage = () => {
  const params = useParams();

  const studentId = params.id;
  const currentStudent = DUMMY_STUDENTS.find((student) => student.id === studentId);

  return (
    <GeneralBox>
      <Header width="100%" />
      <StyledStudentDetailsPage>
        <ContentBox>
          <h2 style={{marginBottom: "20px"}}>Student Details page</h2>
          <h2>{currentStudent.name}</h2>
        </ContentBox>
      </StyledStudentDetailsPage>
    </GeneralBox>
  );
};

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`;

const StyledStudentDetailsPage = styled.div`
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
export default StudentDetailsPage;

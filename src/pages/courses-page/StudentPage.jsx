import React from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";
import Students from "./student/Students";
import { useNavigate } from "react-router-dom";

export const DUMMY_STUDENTS = [
  {
    name: "Student Name 1",
    id: "1",
  },
  {
    name: "Student Name 2",
    id: "2",
  }
]

const StudentPage = () => {
  const navigate = useNavigate();

  const clickHandler = (studentId) => {
    navigate(`${studentId}/details`)
  };

  return (
    <GeneralBox>
      <Header width="100%" clickHandler={clickHandler}/>
      <StyledStundentPage>
          <ContentBox>
            <StudentsList>
              {
                DUMMY_STUDENTS.map((student) => {
                  return (
                    <Students clickHandler={clickHandler} key={student.id} student={student}/>
                  )
                })
              }
            </StudentsList>
          </ContentBox>
      </StyledStundentPage>
    </GeneralBox>
  );
};

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`

const StyledStundentPage = styled.div`
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
`;

const StudentsList = styled.ul`
  list-style: none;
`
export default StudentPage;

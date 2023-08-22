import React from "react";
import { styled } from "styled-components";
import Header from "../../../components/header/Header";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { DUMMY_MATERIALS } from "../MaterialsPage";
import "./Material.css";

const MaterialDetailsPage = () => {
  const params = useParams();


  const materialId = params.id;

  const currentMaterial = DUMMY_MATERIALS.find(
    (material) => material.id === materialId
  );

  return (
    <GeneralBox>
      <Header width="100%" />
      <StyledRatingsPage>
        <ContentBox>
          <StudentInfo>
            <h2 style={{ marginBottom: "20px" }}>Material Details page</h2>
            <h2>{currentMaterial.title}</h2>
          </StudentInfo>
          <StatusFilter>
            <StatusNavList>
              <NavLink
                to={`/courses/materials/${currentMaterial.id}/details/submitted`}
                className={({ isActive }) => {
                  if (isActive) {
                    return "defaultMaterialNav activeMaterialNav";
                  }
                  return "defaultMaterialNav";
                }}
              >
                Submitted
              </NavLink>
              <NavLink
                to={`/courses/materials/${currentMaterial.id}/details/waiting`}
                className={({ isActive }) => {
                  if (isActive) {
                    return "defaultMaterialNav activeMaterialNav";
                  }
                  return "defaultMaterialNav";
                }}
              >
                Waiting
              </NavLink>
              <NavLink
                to={`/courses/materials/${currentMaterial.id}/details/late`}
                className={({ isActive }) => {
                  if (isActive) {
                    return "defaultMaterialNav activeMaterialNav";
                  }
                  return "defaultMaterialNav";
                }}
              >
                Late
              </NavLink>
            </StatusNavList>
          </StatusFilter>
          <StatusFilterContent>
              <Outlet/>
          </StatusFilterContent>
        </ContentBox>
      </StyledRatingsPage>
    </GeneralBox>
  );
};

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`;

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

  padding-top: 20px;
  background-color: white;
`;

const StudentInfo = styled.div`
  padding-left: 20px;
`;

const StatusFilter = styled.div`
  display: flex;
  align-items: center;
  background-color: #14ac9d;
  margin-top: 5%;
  width: 100%;
  height: 15%;
`;

const StatusNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 40%;
`;

const StatusFilterContent = styled.div`
  background-color: #D0F0EC;
  height: 54.5%;
  padding: 20px 0 0 20px;
`

export default MaterialDetailsPage;

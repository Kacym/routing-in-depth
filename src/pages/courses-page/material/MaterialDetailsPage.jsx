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
                Wating
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
              <Outlet/>
            </StatusNavList>
          </StatusFilter>
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
  background-color: #14ac9d;
  margin-top: 5%;
  width: 100%;
  height: 20%;
`;

const StatusNavList = styled.ul`
  list-style: none;
`;

export default MaterialDetailsPage;

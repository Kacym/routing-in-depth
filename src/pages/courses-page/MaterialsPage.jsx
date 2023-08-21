import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../../components/header/Header";
import Materials from "./material/Materials";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Modal from "../../components/modal/Modal";

export const DUMMY_MATERIALS = [
  {
    title: "Material 1",
    id: "1",
  },
  {
    title: "Material 2",
    id: "2",
  },
];

const MaterialsPage = () => {

  const [showModal, setShowModal] = useState(false);

  const showAndCloseModalHandler = () => {
    setShowModal((prevState) => !prevState)
  }
  
  const navigate = useNavigate();

  const clickHandler = (materialId) => {
    navigate(`${materialId}/details`);
  };

  return (
    <GeneralBox>
      {showModal && <Modal closeModal={showAndCloseModalHandler}/>}
      <Header width="100%" />
      <StyledMaterialsPage>
        <ContentBox>
          <Button onClick={showAndCloseModalHandler} width="350px" mTop="-20px" mBottom="20px" fontSize="25px" title="Add new material" color="white" bgColor="#E38443"/>
          <MaterialsList>
            {DUMMY_MATERIALS.map((material) => {
              return (
                <Materials
                  clickHandler={clickHandler}
                  key={material.id}
                  material={material}
                />
              );
            })}
          </MaterialsList>
        </ContentBox>
      </StyledMaterialsPage>
    </GeneralBox>
  );
};

const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
`;

const StyledMaterialsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e3e7ed;
  height: 82vh;
`;

const ContentBox = styled.div`
  text-align: end;
  width: 95%;
  height: 70vh;

  padding: 20px 0 0 20px;
`;

const MaterialsList = styled.ul`
  list-style: none;
`;

export default MaterialsPage;

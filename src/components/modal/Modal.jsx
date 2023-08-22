import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button"

const Modal = ({ closeModal }) => {
  return (
    <>
      <Backdrop onClick={closeModal}></Backdrop>
      <StyledModal>
        <h2>Add the new material</h2>
        <Button onClick={closeModal} mTop="25%" title="close modal"/>
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  background-color: #F5DADE;
  padding: 40px 50px;
  top: 18%;
  left: 25%;
  width: 50%;
  height: 50vh;
  position: fixed;
  z-index: 100;
`

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: black;
    opacity: 80%;
`

export default Modal;

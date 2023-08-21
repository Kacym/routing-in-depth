import React from "react";
import { styled } from "styled-components";

const Modal = ({ closeModal }) => {
  return (
    <>
      <Backdrop onClick={closeModal}></Backdrop>
      {/* <div>Modal</div> */}
    </>
  );
};

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

import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: relative;

  display: block;
  width: 460px;
  min-height: 600px;
  max-height: 700px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;

  .modal-loader {
    position: absolute;
    top: 302px;
    left: 367px;
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExitBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  left: 501px;

  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  .cross {
    width: 24px;
    height: 24px;
  }
`;

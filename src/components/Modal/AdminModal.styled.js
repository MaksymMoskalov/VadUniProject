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
  width: 260px;
  height: 220px;
  padding: 20px;
  border-radius: 24px;
  background-color: white;

  .modal-loader {
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }

  .admin-title {
    margin-top: 20px;
  }
`;

export const ExitBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  left: 264px;

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

export const LoginInp = styled.input`
  height: 28px;
  width: 240px;
  border: 2px solid #ccc;
  border-radius: 6px;

  font-size: 16px;
`;

export const AdminForm = styled.form`
  margin-top: 40px;

  .form__label {
    margin-bottom: 4px;
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 24px;
  font-size: 16px;

  width: 130px;
  height: 35px;
  border-radius: 8px;
`;

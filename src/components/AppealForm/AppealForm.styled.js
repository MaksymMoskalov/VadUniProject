import styled from 'styled-components';

export const StyledForm = styled.form`
  .info {
    margin-bottom: 8px;
  }
  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  .form__label {
    box-sizing: content-box;
  }
  .error-message {
    color: red;
  }

  .input-error {
    border-color: red;
  }

  .info-wrapper {
    display: flex;
    gap: 32px;
    width: 460px;
    margin: 0;
  }

  .form-input {
    height: 28px;
    border: 2px solid #ccc;
    border-radius: 6px;

    font-size: 16px;
  }

  .form-input.statement {
    height: 180px;
  }

  .form-select {
    appearance: none; /* Відключення стандартного вигляду */
    padding: 8px;
    border: 2px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;

    font-size: 16px;
  }

  .form-select option {
    padding: 8px;
    background-color: #fff;
    font-size: 16px;
  }

  .send-btn {
    width: 124px;
    height: 38px;
    font-size: 16px;
    border-radius: 8px;
    background-color: lightblue;
    border: 1px solid transparent;
  }
`;

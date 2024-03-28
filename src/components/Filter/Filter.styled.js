import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  font-size: 16px;

  .filter-title {
    text-align: center;
    margin-bottom: 10px;
  }

  .filter-select {
    width: 50px;
    height: 30px;
    font-size: 16px;
    margin-left: 6px;
  }

  .filter-lable {
    margin-right: 20px;
  }

  .filter-submit {
    font-size: 16px;
    height: 30px;
  }

  .filter-submit {
    border-radius: 8px;
    border-color: transparent;
    color: #fff;
    background-color: #4054ff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #2c3ab2;
    }
  }
`;

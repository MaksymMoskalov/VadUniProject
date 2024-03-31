import styled from 'styled-components';

export const StyledStudentItem = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  border-radius: 14px;
  outline: 1px solid #3470ff;
  padding: 10px;

  font-family: Manrope;

  .item-description {
    font-weight: 600;
  }

  .item-text {
    margin-bottom: 10px;
  }

  .statement-text {
    width: 274px;
    height: 160px;
    overflow: auto;
  }
  .text-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .button-wrapper {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
  }

  .item-buttons {
    border-radius: 4px;
    border-color: transparent;
    color: #fff;
    background-color: #4054ff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 16px;

    &:hover {
      background-color: #2c3ab2;
    }
  }
`;

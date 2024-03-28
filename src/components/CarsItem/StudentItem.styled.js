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
    /* word-wrap: ; */
  }
  .text-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

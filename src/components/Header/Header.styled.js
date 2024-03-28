import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3470ff;
  border-left: 1px solid #3470ff;
  border-right: 1px solid #3470ff;
  border-radius: 8px;
  margin-bottom: 32px;
  padding: 10px;

  font-size: 18px;
  font-weight: 500;

  .head-text {
    margin-left: 30px;
  }

  .logout-btn {
    font-size: 16px;
    width: 70px;
    height: 35px;
    margin-left: auto;
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

export const HeaderLogo = styled.img`
  width: 100px;
  height: 100px;
`;

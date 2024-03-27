import { StyledHeader, HeaderLogo } from './Header.styled';
import logo from '../../img/logo.png';

export const CatalogHeader = () => {
  return (
    <StyledHeader>
      <HeaderLogo src={logo} alt="logo" />
      <p className="head-text">
        Державний університет інфраструктури та технологій адміністрування заяв
      </p>
    </StyledHeader>
  );
};

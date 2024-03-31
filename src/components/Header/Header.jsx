import { StyledHeader, HeaderLogo } from './Header.styled';
import logo from '../../img/logo.png';
import { handlIsAdmin } from '../../redux/adminReduser';
import { useDispatch } from 'react-redux';

export const CatalogHeader = () => {
  const disputch = useDispatch();

  const logOut = () => {
    disputch(handlIsAdmin());
  };

  return (
    <StyledHeader>
      <HeaderLogo src={logo} alt="logo" />
      <p className="head-text">
        Державний університет інформаційно-комунікаційних технологій
        адміністрування заяв
      </p>
      <button onClick={logOut} className="logout-btn">
        Вихід
      </button>
    </StyledHeader>
  );
};

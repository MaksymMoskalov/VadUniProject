import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNavigation } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNavigation>
        <NavLink to={'/'} className="header-link">
          Home
        </NavLink>
        <NavLink to={'/catalog'} className="header-link">
          Catalog
        </NavLink>
      </StyledNavigation>
    </StyledHeader>
  );
};

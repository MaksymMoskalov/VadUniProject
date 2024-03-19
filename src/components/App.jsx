import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));

export const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};

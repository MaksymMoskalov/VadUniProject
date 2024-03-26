import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from 'Styles/Container.styled';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';
import PrivateRoute from 'Routes/Private';
import RestrictedRoute from 'Routes/Restricted';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));

export const App = () => {
  return (
    <StyledContainer>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <RestrictedRoute>
                <Catalog />
              </RestrictedRoute>
            }
          />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};

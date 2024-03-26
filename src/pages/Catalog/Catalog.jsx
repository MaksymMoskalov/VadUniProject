import { StudentsList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allStatementsThunk } from '../../redux/studentsOperations';
import { selectIsLoading } from '../../redux/cars.selectors';
// import { handlModalClose } from '../../redux/studentsReduser';
import { Loader } from 'components/Loader/Loader';
import { CatalogSection } from './Catalog.styled';
import { handlIsAdmin } from '../../redux/adminReduser';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const fact = useSelector(selectFact);

  useEffect(() => {
    disputch(allStatementsThunk());
  }, [disputch]);

  const logOut = () => {
    disputch(handlIsAdmin());
  };

  return (
    <>
      <CatalogSection>
        <StudentsList />
        <button onClick={logOut}>Вихід</button>
        {isLoading && <Loader />}
      </CatalogSection>
    </>
  );
};

export default Catalog;

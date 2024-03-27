import { StudentsList } from 'components/CarsList/StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allStatementsThunk } from '../../redux/studentsOperations';
import {
  selectIsLoading,
  selectStatements,
  selectFilter,
} from '../../redux/students.selectors';
import { Loader } from 'components/Loader/Loader';
import {
  CatalogSection,
  CatalogContainer,
  CatalogTitle,
} from './Catalog.styled';
import { handlIsAdmin } from '../../redux/adminReduser';
import { CatalogHeader } from 'components/Header/Header';
import { Filter } from 'components/Filter/Filter';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const statements = useSelector(selectStatements);
  const filt = useSelector(selectFilter);

  useEffect(() => {
    disputch(allStatementsThunk());
  }, [disputch]);

  const logOut = () => {
    disputch(handlIsAdmin());
  };

  const filteredStatements = () => {
    return statements.filter(statement => {
      return statement.course >= filt[0] && statement.course <= filt[1];
    });
  };

  const afterFiltration = filteredStatements();

  return (
    <CatalogContainer>
      <CatalogHeader />
      <CatalogSection>
        <CatalogTitle>Заяви на поселення в гуртожиток</CatalogTitle>
        <Filter />
        <StudentsList studentStatements={afterFiltration} />
        <button onClick={logOut}>Вихід</button>
        {isLoading && <Loader />}
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalog;

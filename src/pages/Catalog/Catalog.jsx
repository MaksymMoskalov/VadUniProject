import { StudentsList } from 'components/CarsList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allStatementsThunk } from '../../redux/studentsOperations';
import { selectIsLoading } from '../../redux/cars.selectors';
import { CarModal } from 'components/Modal/Modal';
// import { handlModalClose } from '../../redux/studentsReduser';
import { Loader } from 'components/Loader/Loader';
import { CatalogSection } from './Catalog.styled';

const Catalog = () => {
  const disputch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const fact = useSelector(selectFact);
  // const total = useSelector(selectTotal);
  // const page = useSelector(selectPage);
  // const cars = useSelector(selectCars);
  // const brandFilter = useSelector(selectBrandFilter);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    disputch(allStatementsThunk());
  }, [disputch]);

  // const onLoadMore = () => {
  //   disputch(loadMoreCarsThunk(page));
  // };

  const toglModal = () => {
    setOpenModal(!openModal);
    // disputch(handlModalClose(null));
  };

  return (
    <>
      <CatalogSection>
        <StudentsList openModal={toglModal} />
        {isLoading && <Loader />}
      </CatalogSection>
      {openModal && <CarModal closeModal={toglModal} />}
    </>
  );
};

export default Catalog;

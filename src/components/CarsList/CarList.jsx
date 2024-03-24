import { StudentItem } from 'components/CarsItem/CarItem';
import { StyledCarList } from './CarList.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { exactCarThunk } from '../../redux/studentsOperations';
import { selectStatements } from '../../redux/cars.selectors';

export const StudentsList = ({ openModal }) => {
  //   const disputch = useDispatch();
  const statements = useSelector(selectStatements);

  const vievModal = id => {
    // disputch(exactCarThunk(id));
    openModal();
  };

  return (
    <StyledCarList>
      {statements !== null &&
        statements.map(statement => {
          return (
            <StudentItem
              studentItemData={statement}
              key={statement.id}
              openModal={() => vievModal(statement.id)}
            />
          );
        })}
    </StyledCarList>
  );
};

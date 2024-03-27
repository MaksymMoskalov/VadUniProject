import { StudentItem } from 'components/CarsItem/StudentItem';
import { StyledCarList } from './StudentList.styled';
// import { exactCarThunk } from '../../redux/studentsOperations';

export const StudentsList = ({ studentStatements }) => {
  //   const disputch = useDispatch();

  // const vievModal = id => {
  //   // disputch(exactCarThunk(id));
  //   openModal();
  // };

  return (
    <StyledCarList>
      {studentStatements !== null &&
        studentStatements.map(statement => {
          return (
            <StudentItem
              studentItemData={statement}
              key={statement.id}
              // openModal={() => vievModal(statement.id)}
            />
          );
        })}
    </StyledCarList>
  );
};

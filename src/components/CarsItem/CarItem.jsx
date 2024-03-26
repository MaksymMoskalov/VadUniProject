import { useDispatch, useSelector } from 'react-redux';
import { deleteStatementThunk } from '../../redux/studentsOperations';

export const StudentItem = ({ studentItemData, openModal }) => {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectFavouriteCars);

  const { name, course, specialty, statement, email, id, phone } =
    studentItemData;

  const deleteStatement = id => {
    dispatch(deleteStatementThunk(id));
  };

  return (
    <li>
      <h1>{id}</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <div>
        <p>{course}</p>
        <p>{specialty}</p>
      </div>
      <p>{statement}</p>
      <button onClick={() => deleteStatement(id)}>Видалити</button>
    </li>
  );
};

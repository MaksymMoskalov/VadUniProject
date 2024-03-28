import { useDispatch } from 'react-redux';
import { deleteStatementThunk } from '../../redux/studentsOperations';
import { StyledStudentItem } from './StudentItem.styled';

export const StudentItem = ({ studentItemData, openModal }) => {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectFavouriteCars);

  const { name, course, specialty, statement, email, id, phone } =
    studentItemData;

  const deleteStatement = id => {
    dispatch(deleteStatementThunk(id));
  };

  return (
    <StyledStudentItem>
      <p className="item-description">ПІБ студента:</p>
      <p className="item-text">{name}</p>
      <p className="item-description">Електронна пошта:</p>
      <p className="item-text">{email}</p>
      <p className="item-description">Номер телефону:</p>
      <p className="item-text">{phone}</p>
      <div className="text-wrapper">
        <div>
          <p className="item-description">Курс:</p>
          <p className="item-text">{course}</p>
        </div>
        <div>
          <p className="item-description">Спеціальність:</p>
          <p className="item-text">{specialty}</p>
        </div>
      </div>
      <p className="item-description">Текст заяви:</p>
      <p className="statement-text">{statement}</p>
      <button onClick={() => deleteStatement(id)}>Видалити</button>
    </StyledStudentItem>
  );
};

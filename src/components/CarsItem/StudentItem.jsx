import { useDispatch } from 'react-redux';
import { deleteStatementThunk } from '../../redux/studentsOperations';
import { StyledStudentItem } from './StudentItem.styled';
import Notiflix from 'notiflix';

export const StudentItem = ({ studentItemData }) => {
  const dispatch = useDispatch();

  const { name, course, specialty, statement, email, id, phone, group } =
    studentItemData;

  const deleteStatement = id => {
    dispatch(deleteStatementThunk(id));
  };

  const copyStatementText = id => {
    const statementText = document.getElementById(id).textContent;
    navigator.clipboard
      .writeText(statementText)
      .then(() => Notiflix.Notify.success('Текст заяви скопійовано!'))
      .catch(error => console.error('Помилка копіювання:', error));
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
          <p className="item-description">Група:</p>
          <p className="item-text">{group}</p>
        </div>
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
      <p className="statement-text" id={id}>
        {statement}
      </p>
      <div className="button-wrapper">
        <button
          onClick={() => deleteStatement(id)}
          type="button"
          className="item-buttons"
        >
          Видалити
        </button>
        <button
          type="button"
          onClick={() => copyStatementText(id)}
          className="item-buttons"
        >
          Копі
        </button>
      </div>
    </StyledStudentItem>
  );
};

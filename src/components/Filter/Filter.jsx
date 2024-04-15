import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  handlFiltration,
  handlFacultFiltration,
} from '../../redux/studentsReduser';
import { Form } from './Filter.styled';
import { faculties } from 'components/AppealForm/universityData';

export const Filter = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(handlFiltration(data));
    dispatch(handlFacultFiltration(data.specialty));
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p className="filter-title">Сортування за курсами</p>
      <div className="filter-title">
        <label className="filter-lable">
          Від:
          <select
            {...register('start')}
            defaultValue={1}
            className="filter-select"
          >
            {[...Array(6)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-lable">
          До:
          <select
            {...register('end')}
            defaultValue={6}
            className="filter-select"
          >
            {[...Array(6)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="filter-title">Сортування за факультетом</p>
      <div className="form-group field">
        <select
          {...register('specialty')}
          className={
            errors.statement ? 'form-select input-error' : 'form-select'
          }
        >
          <option value="">Оберіть факультет</option>
          {faculties.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="filter-submit">
        Відсортувати
      </button>
    </Form>
  );
};

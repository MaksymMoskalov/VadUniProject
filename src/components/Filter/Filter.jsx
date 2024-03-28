import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { handlFiltration } from '../../redux/studentsReduser';
import { Form } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  //   const onSubmit = data => {
  //     dispatch(handlFiltration(data));
  //   };

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(handlFiltration(data));
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p className="filter-title">Сортування за курсами</p>
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
        <select {...register('end')} defaultValue={6} className="filter-select">
          {[...Array(6)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="filter-submit">
        Відсортувати
      </button>
    </Form>
  );
};

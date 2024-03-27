import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { handlFiltration } from '../../redux/studentsReduser';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Початкове значення:
        <select {...register('start')} defaultValue={1}>
          {[...Array(6)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <label>
        Кінцеве значення:
        <select {...register('end')} defaultValue={6}>
          {[...Array(6)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Підтвердити</button>
    </form>
  );
};

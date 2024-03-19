import React from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div className="form__group field">
        <input
          {...register('name', { required: true })}
          type="text"
          className="form__field"
        />
        <label className="form__label">ПІБ</label>
        {errors.name && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <div className="form__group field">
        <input
          {...register('email', { required: true })}
          type="email"
          className="form__field"
        />
        <label className="form__label">Електронна пошта</label>
        {errors.email && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <div className="form__group field">
        <input
          {...register('course', { required: true })}
          type="text"
          className="form__field"
        />
        <label className="form__label">Ваш курс</label>
        {errors.course && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <div className="form__group field">
        <input
          {...register('specialty', { required: true })}
          type="text"
          className="form__field"
        />
        <label className="form__label">Ваша спеціальність</label>
        {errors.specialty && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <div className="form__group field">
        <input
          {...register('group', { required: true })}
          type="text"
          className="form__field"
        />
        <label className="form__label">Номер вашої групи</label>
        {errors.group && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <div className="form__group field">
        <input
          {...register('statement', { required: true })}
          type="text"
          className="form__field"
        />
        <label className="form__label">Текст звернення</label>
        {errors.statement && (
          <span className="error-message">Це поле є обов'язковим</span>
        )}
      </div>

      <button type="submit" className="login-btn">
        Відправити
      </button>
    </form>
  );
};

export default RegisterPage;

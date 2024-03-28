import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addStatementThunk } from '../../redux/studentsOperations';
import { StyledForm } from './AppealForm.styled';
import { courses, faculties, groupsByFacultyAndCourse } from './universityData';

const RegisterPage = ({ close }) => {
  const dispatch = useDispatch();
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleFacultyChange = e => {
    const faculty = e.target.value;
    setSelectedFaculty(faculty);
  };

  const onSubmit = data => {
    dispatch(addStatementThunk(data));
    console.log(data);
    reset();
    close();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(errors).length ? (
        <p className="info">
          Поля відмічені <span className="error-message">*</span> є
          обов'язковими для заповнення
        </p>
      ) : (
        ''
      )}
      <div className="form__group field">
        <div>
          <label className="form__label">ПІБ</label>
          {errors.name && <span className="error-message">{' *'}</span>}
        </div>
        <input
          {...register('name', { required: true })}
          type="text"
          className={errors.name ? 'form-input input-error' : 'form-input'}
        />
      </div>

      <div className="form__group field">
        <div>
          <label className="form__label">Електронна пошта</label>
          {errors.email && <span className="error-message">{' *'}</span>}
        </div>
        <input
          {...register('email', { required: true })}
          type="email"
          className={errors.email ? 'form-input input-error' : 'form-input'}
        />
      </div>

      <div className="form__group field">
        <div>
          <label className="form__label">Номер телефону</label>
          {errors.phone && <span className="error-message">{' *'}</span>}
        </div>
        <input
          {...register('phone', { required: true })}
          type="text"
          className={errors.phone ? 'form-input input-error' : 'form-input'}
        />
      </div>

      <div className="form__group field">
        <div>
          <label className="form__label">Факультет</label>
          {errors.specialty && <span className="error-message">{' *'}</span>}
        </div>
        <select
          {...register('specialty', { required: true })}
          onChange={handleFacultyChange}
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

      <div className="info-wrapper">
        <div className="form__group field">
          <div>
            <label className="form__label">Курс</label>
            {errors.course && <span className="error-message">{' *'}</span>}
          </div>

          <select
            {...register('course', { required: true })}
            className={
              errors.statement ? 'form-select input-error' : 'form-select'
            }
          >
            <option value="">Оберіть курс</option>
            {courses.map(course => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="form__group field">
          <div>
            <label className="form__label">Група</label>
            {errors.group && <span className="error-message">{' *'}</span>}
          </div>
          <select
            {...register('group', { required: true })}
            className={
              errors.statement ? 'form-select input-error' : 'form-select'
            }
          >
            <option value="">Оберіть групу</option>
            {selectedFaculty &&
              groupsByFacultyAndCourse[selectedFaculty][
                parseInt(watch('course'))
              ]?.map(group => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="form__group field">
        <div>
          <label className="form__label">Текст звернення</label>
          {errors.statement && <span className="error-message">{' *'}</span>}
        </div>
        <textarea
          {...register('statement', { required: true })}
          type="text"
          className={
            errors.statement
              ? 'form-input statement input-error'
              : 'form-input statement'
          }
        />
      </div>

      <button type="submit" className="send-btn">
        Відправити
      </button>
    </StyledForm>
  );
};

export default RegisterPage;

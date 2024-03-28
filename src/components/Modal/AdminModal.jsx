import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ModalContent,
  Overlay,
  ExitBtn,
  LoginInp,
  AdminForm,
  SubmitBtn,
} from './AdminModal.styled';
import { RxCross2 } from 'react-icons/rx';
import { selectIsLoading } from '../../redux/students.selectors';
import { Blocks } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { handlIsAdmin } from '../../redux/adminReduser';
import { useDispatch } from 'react-redux';

export function AdminModal({ closeModal }) {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  const hendleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeOnBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (data.password === 'admin') {
      dispatch(handlIsAdmin());
    }
    console.log(data);
    reset();
  };

  return (
    <Overlay onClick={closeOnBackdrop}>
      <ModalContent>
        <ExitBtn onClick={closeModal}>
          <RxCross2 className="cross" />
        </ExitBtn>

        <p className="admin-title">Авторизація адміністратора</p>
        <AdminForm onSubmit={handleSubmit(onSubmit)}>
          <div className="form__group field">
            <div className="form__label">
              <label>Введіть пароль</label>
              {errors.password && <span className="error-message">{' *'}</span>}
            </div>
            <LoginInp
              {...register('password', { required: true })}
              type="password"
            />
          </div>
          <SubmitBtn type="submit" className="send-btn">
            Відправити
          </SubmitBtn>
        </AdminForm>

        {isLoading && (
          <div className="modal-loader">
            <Blocks
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
            />
          </div>
        )}
      </ModalContent>
    </Overlay>
  );
}

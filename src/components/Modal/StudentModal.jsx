import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ModalContent, Overlay, ExitBtn } from './StudentModal.styled';
import { RxCross2 } from 'react-icons/rx';
import { selectIsLoading } from '../../redux/students.selectors';
import { Blocks } from 'react-loader-spinner';
import RegisterPage from 'components/AppealForm/AppealForm';

export function StudentModal({ closeModal }) {
  const isLoading = useSelector(selectIsLoading);

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

  return (
    <Overlay onClick={closeOnBackdrop}>
      <ModalContent>
        <ExitBtn onClick={closeModal}>
          <RxCross2 className="cross" />
        </ExitBtn>

        <RegisterPage close={closeModal} />

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

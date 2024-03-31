import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { handlResetCatalog } from '../../redux/studentsReduser';
// import { selectIsLoading } from '../../redux/cars.selectors';
// import { Loader } from 'components/Loader/Loader';

// import homeImg from '../../img/HomePage/home.png';
// import homeImg from '../../img/Home.jpg';
import logo from '../../img/logo.png';

import {
  // ImgWrapper,
  // HomeImg,
  HomeSection,
  AppealButton,
  ButtonWrapper,
  LogoImg,
} from './Home.styled';
import { StudentModal } from 'components/Modal/StudentModal';
import { AdminModal } from 'components/Modal/AdminModal';
import { selectisAdmin } from '../../redux/students.selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const [openAdminModal, setOpenAdminModal] = useState(false);
  const isAdmin = useSelector(selectisAdmin);

  const toglMainModal = () => {
    setOpenMainModal(!openMainModal);
  };

  const toglAdminModal = () => {
    setOpenAdminModal(!openAdminModal);
  };

  return (
    <>
      <HomeSection>
        {/* <ImgWrapper>
          <HomeImg src={homeImg} alt="" />
        </ImgWrapper> */}
        <LogoImg src={logo} alt="" width={150} />
        <h1>Державний університет інформаційно-комунікаційних технологій</h1>
        <h2>Подача заяв на поселення в гуртожиток</h2>
        <ButtonWrapper>
          <AppealButton onClick={toglMainModal} type="button">
            Подати заяву
          </AppealButton>
          {!isAdmin && (
            <AppealButton onClick={toglAdminModal} type="button">
              Я Адміністратор
            </AppealButton>
          )}
        </ButtonWrapper>
      </HomeSection>
      {openAdminModal && <AdminModal closeModal={toglAdminModal} />}
      {openMainModal && <StudentModal closeModal={toglMainModal} />}
    </>
  );
};

export default Home;

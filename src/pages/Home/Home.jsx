import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlResetCatalog } from '../../redux/autosReduser';
import { selectIsLoading } from '../../redux/cars.selectors';
import { Loader } from 'components/Loader/Loader';

import homeImg from '../../img/HomePage/home.png';

const Home = () => {
  const disputch = useDispatch();

  useEffect(() => {
    disputch(handlResetCatalog());
  }, [disputch]);
  return;
};

export default Home;

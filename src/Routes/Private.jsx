import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisAdmin } from '../redux/students.selectors';

const PrivateRoute = ({ children, redirectTo = '/catalog' }) => {
  const authenticated = useSelector(selectisAdmin);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;

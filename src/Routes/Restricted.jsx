import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisAdmin } from '../redux/students.selectors';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectisAdmin);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default RestrictedRoute;

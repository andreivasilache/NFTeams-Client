import React from 'react';
import { Redirect, Route } from 'react-router';
import { ROUTES } from '../../Shared/constants/Routes';

export const WithProtectedRoute = ({ Component, isAuthenticated, path }: any) => (
  <Route exact path={path} render={() => (isAuthenticated ? <Component /> : <Redirect to={ROUTES.auth} />)} />
);

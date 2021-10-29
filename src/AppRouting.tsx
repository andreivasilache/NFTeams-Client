import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Profile } from './Pages/Profile/Profile';
import { Auth } from './Components/Auth/Auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

export const AppRouting = () => {
  const [user, loading, error] = useAuthState(getAuth());

  console.log(user, loading, error);

  /* 
    todo: after the auth, check if the user has a wallet assigned 
    how to read/write to auth metadata: 
    https://stackoverflow.com/questions/57730452/how-to-add-metadata-to-firebase-authentication/57730489
  
  */

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Switch>
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/auth' component={Auth} />
      <Redirect to={user ? '/profile' : '/auth'} />
    </Switch>
  );
};

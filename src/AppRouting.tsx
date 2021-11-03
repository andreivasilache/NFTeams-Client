import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { doc, getDoc, getFirestore, setDoc } from '@firebase/firestore';
import { Wallet } from '@ethersproject/wallet';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Profile } from './Pages/Profile/Profile';
import { Auth } from './Components/Auth/Auth';
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard';
import useStore from './Hooks/useStore';
import { WalletStore } from './Store/Wallet.store';

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
  const [user] = useAuthState(getAuth());
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const walletStore = useStore('walletStore') as WalletStore;

  // console.log(user, loading, error);

  const initUserWallet = async (user: any) => {
    const db = getFirestore();
    const docRef = doc(getFirestore(), 'users', user.uid);
    const docSnap = await getDoc(docRef);

    const initNewWalletForCurrentUser = async () => {
      const { privateKey } = Wallet.createRandom();
      await setDoc(doc(db, 'users', user.uid), { privateKey });
    };

    if (docSnap.exists()) {
      const currentUserPrivateKey = docSnap.data().privateKey;
      if (currentUserPrivateKey) {
        walletStore.initWalletStore(currentUserPrivateKey);
      } else {
        await initNewWalletForCurrentUser();
      }
    } else {
      await initNewWalletForCurrentUser();
    }
    setIsAppInitializing(false);
  };

  useEffect(() => {
    if (user?.uid) {
      initUserWallet(user);
    }
  }, [JSON.stringify(user)]);

  /* 
    todo: after the auth, check if the user has a wallet assigned 
    how to read/write to auth metadata: 
    https://stackoverflow.com/questions/57730452/how-to-add-metadata-to-firebase-authentication/57730489
  
  */

  if (isAppInitializing) {
    return <div>Loading...</div>;
  }
  return (
    <Switch>
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/auth' component={Auth} />
      <Route exact path='/admin-dashboard' component={AdminDashBoard} />
      <Redirect to={user ? '/profile' : '/auth'} />
    </Switch>
  );
};

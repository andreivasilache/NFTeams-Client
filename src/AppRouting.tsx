import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { doc, getDoc, getFirestore, setDoc } from '@firebase/firestore';
import { Wallet } from '@ethersproject/wallet';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Auth } from './Components/Auth/Auth';
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard';
import useStore from './Hooks/useStore';
import { WalletStore } from './Store/Wallet.store';
import { SmartContractsStore } from './Store/SmartContracts.store';
import { FIRESTORE_COLLECTION_KEYS } from './Shared/constants/FireStoreTableKeys';
import './App.css';
import AppMain from './Pages/AppMain/AppMain';

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
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const initUserWallet = async (user: any) => {
    // todo: refactor this.
    const db = getFirestore();
    const docRef = doc(getFirestore(), FIRESTORE_COLLECTION_KEYS.USERS, user.uid);
    const docSnap = await getDoc(docRef);

    let walletRef;
    let infuraProviderRef;

    const initNewWalletForCurrentUser = async () => {
      const { privateKey } = Wallet.createRandom();
      await setDoc(doc(db, FIRESTORE_COLLECTION_KEYS.USERS, user.uid), { privateKey });
      const walletInstance = walletStore.initWalletStore(privateKey);
      walletRef = walletInstance.wallet;
      infuraProviderRef = walletInstance.infuraProvider;
    };

    if (docSnap.exists()) {
      const currentUserPrivateKey = docSnap.data().privateKey;
      if (currentUserPrivateKey) {
        const walletInstance = walletStore.initWalletStore(currentUserPrivateKey);
        walletRef = walletInstance.wallet;
        infuraProviderRef = walletInstance.infuraProvider;
      } else {
        await initNewWalletForCurrentUser();
      }
    } else {
      await initNewWalletForCurrentUser();
    }
    await smartContractsStore.init(walletRef as any, infuraProviderRef as any);
    setIsAppInitializing(false);
  };

  useEffect(() => {
    if (user?.uid) {
      initUserWallet(user);
    }
  }, [JSON.stringify(user)]);

  if (isAppInitializing && window.location.pathname !== '/auth') {
    return <div>Loading...</div>;
  }
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/profile' component={AppMain} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/admin-dashboard' component={AdminDashBoard} />
        <Route exact path='/dashboard' component={AppMain} />
        <Route exact path='/wallet' component={AppMain} />
        <Redirect to={user ? '/dashboard' : '/auth'} />
      </Switch>
    </div>
  );
};

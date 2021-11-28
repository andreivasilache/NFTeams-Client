import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { doc, getDoc, getFirestore, setDoc } from '@firebase/firestore';
import { Wallet } from '@ethersproject/wallet';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Auth } from './Pages/Auth/Auth';
import useStore from './Hooks/useStore';
import { WalletStore } from './Store/Wallet.store';
import { SmartContractsStore } from './Store/SmartContracts.store';
import { FIRESTORE_COLLECTION_KEYS } from './Shared/constants/FireStoreTableKeys';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import { Profile } from './Pages/Profile/Profile';
import WalletComponent from './Pages/Wallet/Wallet';
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard';
import { ROUTES } from './Shared/constants/Routes';
import { WithProtectedRoute } from './HOCs/WithAppLayout/WithProtectedRoute';
import Market from './Pages/Market/Market';
import { CurrentFirebaseUserStore } from './Store/CurrentFirebaseUser.store';
import QuestsStore from './Store/Quests.store';

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
  const [authState, setAuthState] = useState<true | false | 'loading'>('loading');
  const [user] = useAuthState(getAuth());
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const walletStore = useStore('walletStore') as WalletStore;
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const currentFirebaseUser = useStore('currentFirebaseUser') as CurrentFirebaseUserStore;
  const questsStore = useStore('questsStore') as QuestsStore;

  const initUserWallet = async (user: any) => {
    // todo: refactor this.
    const db = getFirestore();
    const docRef = doc(getFirestore(), FIRESTORE_COLLECTION_KEYS.USERS, user.uid);
    const docSnap = await getDoc(docRef);

    let walletRef;
    let infuraProviderRef;
    const initNewWalletForCurrentUser = async () => {
      const { privateKey, address } = Wallet.createRandom();
      await setDoc(doc(db, FIRESTORE_COLLECTION_KEYS.USERS, user.uid), {
        privateKey,
        publicAddress: address,
        email: user.email,
        company: 'ASSIST',
      });
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
    await currentFirebaseUser.initFirebase(user.uid);
    await currentFirebaseUser.getCurrentUserData();
    await questsStore.initStore();
    setIsAppInitializing(false);
  };

  useEffect(
    () =>
      getAuth().onAuthStateChanged(user => {
        if (user) {
          setAuthState(true);
        } else {
          setAuthState(false);
        }
      }),
    [],
  );

  useEffect(() => {
    if (user?.uid) {
      initUserWallet(user);
    }
  }, [JSON.stringify(user)]);

  if (isAppInitializing && window.location.pathname !== ROUTES.auth) {
    return <div>Loading...</div>;
  }
  return (
    <div className='app-container'>
      <Switch>
        <WithProtectedRoute Component={UserDashboard} isAuthenticated={authState === true} path={ROUTES.dashboard} />
        {/* <Route exact path={ROUTES.dashboard} component={UserDashboard} /> */}
        <Route exact path={ROUTES.auth} component={Auth} />
        <WithProtectedRoute path={ROUTES.adminDashboard} isAuthenticated={authState === true} Component={AdminDashBoard} />
        <WithProtectedRoute path={ROUTES.profile} isAuthenticated={authState === true} Component={Profile} />
        <WithProtectedRoute path={ROUTES.wallet} isAuthenticated={authState === true} Component={WalletComponent} />
        <WithProtectedRoute path={ROUTES.marketPlace} isAuthenticated={authState === true} Component={Market} />
        <Redirect to={ROUTES.dashboard} />
      </Switch>
    </div>
  );
};

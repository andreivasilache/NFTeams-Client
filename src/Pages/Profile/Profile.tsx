import React, { useEffect, useState } from 'react';
import { getAuth } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Profile.css';
import { doc, getDoc ,getFirestore} from "firebase/firestore";
import { initEthWalletAndInfuraSmartContracts } from '../../Shared/initWeb3Wallet';
import useAccountNFTS from '../../Hooks/useAccountNFTS';



export const Profile = () => {
  const [user] = useAuthState(getAuth());
  // todo: this private key will be received from firebase
  const defaultKey = '2a915da949d081da2f0084884d47480a486d25dbddb9125002521b32c148fd03';
  const [privateKey, setPKey] = useState(defaultKey);
  const [walletLoaded,setWalletLoaded] = useState(false);


  const getPrivateKey = async (user:any) => {
    const db = getFirestore();
    const docRef = doc(db, "Users Keys",user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setPKey(docSnap.data().privateKey);
      setWalletLoaded(true);
    } 
    return "No such document!";
  }
  useEffect(()=>{
    getPrivateKey(user);
  },[])
  
  // const privateKey = '2a915da949d081da2f0084884d47480a486d25dbddb9125002521b32c148fd03';
  const { wallet } = initEthWalletAndInfuraSmartContracts(privateKey);
  const nfts = useAccountNFTS(wallet.address);
  
  
  return (
    <div>
      <div>Hello {user.email}</div> <br />
      <div>WALLET ID: {walletLoaded ? wallet.address:''}</div>
      <div>NFTS of wallet: {JSON.stringify(nfts)}</div>
    </div>
  );
};

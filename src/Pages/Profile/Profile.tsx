import React from 'react';
import { getAuth } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Profile.css';
import { initEthWalletAndInfuraSmartContracts } from '../../Shared/initWeb3Wallet';
import useAccountNFTS from '../../Hooks/useAccountNFTS';

export const Profile = () => {
  const [user] = useAuthState(getAuth());

  // todo: this private key will be received from firebase
  const privateKey = '2a915da949d081da2f0084884d47480a486d25dbddb9125002521b32c148fd03';
  const { wallet } = initEthWalletAndInfuraSmartContracts(privateKey);
  const nfts = useAccountNFTS(wallet.address);

  return (
    <div>
      <div>Hello {user.email}</div> <br />
      <div>WALLET ID: {wallet.address}</div>
      <div>NFTS of wallet: {JSON.stringify(nfts)}</div>
    </div>
  );
};

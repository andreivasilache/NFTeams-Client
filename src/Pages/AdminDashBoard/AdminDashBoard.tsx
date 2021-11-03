import React from 'react';
import { initEthWalletAndInfuraSmartContracts } from '../../Shared/initWeb3Wallet';

const AdminDashBoard = () => {
  const privateKey = '2a915da949d081da2f0084884d47480a486d25dbddb9125002521b32c148fd03';
  const { infuraProvider } = initEthWalletAndInfuraSmartContracts(privateKey);
  console.log(infuraProvider);

  return <div>aasd</div>;
};

export default AdminDashBoard;

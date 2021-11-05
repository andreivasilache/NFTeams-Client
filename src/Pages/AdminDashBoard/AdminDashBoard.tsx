import React from 'react';
import useStore from '../../Hooks/useStore';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../Store/SmartContracts.store';
import { WalletStore } from '../../Store/Wallet.store';

const AdminDashBoard = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const { wallet } = useStore('walletStore') as WalletStore;

  const mintNFT = async () => {
    const imagineGolf4 =
      'https://maxtondesign.com/eng_pl_REAR-BUMPER-EXTENSION-VW-GOLF-4-25TH-ANNIVERSARY-LOOK-with-exhaust-hole-7985_1.jpg';
    try {
      const res = await smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardNFT(wallet?.address, imagineGolf4);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button type='button' onClick={mintNFT}>
        give myself a NFT :d
      </button>
    </div>
  );
};

export default AdminDashBoard;

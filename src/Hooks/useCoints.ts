import { ethers } from 'ethers';
import { useRef, useEffect, useState } from 'react';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../Store/SmartContracts.store';
import { WalletStore } from '../Store/Wallet.store';
import useStore from './useStore';

const useCoins = () => {
  const [accountCoins, setAccountCoins] = useState('0');
  const { wallet } = useStore('walletStore') as WalletStore;

  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const coinsContractMethods = useRef<any>();

  useEffect(() => {
    coinsContractMethods.current = smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.COINS_PROVIDER);
  }, []);

  const loadCurrentAccountCoins = async () => {
    const balance = await coinsContractMethods.current.balanceOf(wallet?.address);
    const formattedBalance = ethers.utils.formatEther(balance);

    const noDecimalsBalance = +formattedBalance;

    setAccountCoins(`${noDecimalsBalance}`);
  };

  const giveCoinsToAddress = async (address: string, numberOfCoins: number) => {
    // todo: fix typo of smart contract
    const formatValueToUint256 = ethers.utils.parseUnits(`${numberOfCoins}`, 18);
    await coinsContractMethods.current.sendCointsToAdress(address, formatValueToUint256);
  };

  return {
    accountCoins,
    loadCurrentAccountCoins,
    giveCoinsToAddress,
  };
};

export default useCoins;

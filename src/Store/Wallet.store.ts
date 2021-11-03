import { ethers, Wallet } from 'ethers';
import { makeAutoObservable } from 'mobx';
import { initEthWalletAndInfuraSmartContracts } from '../Shared/initWeb3Wallet';

export class WalletStore {
  wallet?: Wallet;
  infuraProvider?: ethers.providers.InfuraProvider;
  privateKey?: string;

  constructor() {
    makeAutoObservable(this);
  }

  public initWalletStore(privateKey: string) {
    const { wallet, infuraProvider } = initEthWalletAndInfuraSmartContracts(privateKey);
    this.privateKey = privateKey;
    this.wallet = wallet;
    this.infuraProvider = infuraProvider;
  }
}

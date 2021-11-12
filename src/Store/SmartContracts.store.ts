import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Wallet } from '@ethersproject/wallet';
import { ethers } from 'ethers';
import { makeAutoObservable } from 'mobx';
import { FIRESTORE_COLLECTION_KEYS } from '../Shared/constants/FireStoreTableKeys';

export enum SMART_CONTRACTS_ENUM {
  GENERATE_NFT = 'NFTProvider',
  COINS_PROVIDER = 'MarketCoins',
}

export class SmartContractsStore {
  wallet?: Wallet;
  infuraProvider?: ethers.providers.InfuraProvider;
  smartContracts: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  async init(wallet: Wallet, infuraProvider: ethers.providers.InfuraProvider) {
    this.wallet = wallet;
    this.infuraProvider = infuraProvider;

    const querySnapshot = await getDocs(collection(getFirestore(), FIRESTORE_COLLECTION_KEYS.SMART_CONTRACTS));
    querySnapshot.forEach(doc => {
      (this.smartContracts as any)[doc.id as SMART_CONTRACTS_ENUM] = {
        abi: JSON.parse(doc.data().abi),
        address: doc.data().address,
      };
    });
    console.log('Loaded smart contracts: ', JSON.parse(JSON.stringify(this.smartContracts)));
  }

  getContractByKey(key: SMART_CONTRACTS_ENUM) {
    const { abi, address } = this.smartContracts[key];

    return new ethers.Contract(address, abi, this.wallet);
  }

  async getNFTSOfWallet(wallet?: string) {
    const rawData = await this.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).getAllTokensOfOwner(wallet || this.wallet?.address);
    const NFTS = rawData.map((toBeParsed: string) => JSON.parse(toBeParsed));
    return NFTS;
  }
}

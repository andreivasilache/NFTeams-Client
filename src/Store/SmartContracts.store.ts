import { makeAutoObservable } from 'mobx';

export class SmartContractsStore {
  constructor() {
    makeAutoObservable(this);
  }

  // WIP
  generateNFT(address: string, metadata: string) {}
}

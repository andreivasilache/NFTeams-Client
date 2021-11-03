import { SmartContractsStore } from './SmartContracts.store';
import { WalletStore } from './Wallet.store';

export interface MainStoreInterface {
  walletStore: WalletStore;
  smartContracts: SmartContractsStore;
}

export type MainStoreEnum = keyof MainStoreInterface;

export class MainStore implements MainStoreInterface {
  walletStore = new WalletStore();
  smartContracts = new SmartContractsStore();
}

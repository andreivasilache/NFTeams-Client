import { SmartContractsStore } from './SmartContracts.store';
import { CurrentFirebaseUserStore } from './CurrentFirebaseUser.store';
import { WalletStore } from './Wallet.store';

export interface MainStoreInterface {
  walletStore: WalletStore;
  smartContracts: SmartContractsStore;
  currentFirebaseUser: CurrentFirebaseUserStore;
}

export type MainStoreEnum = keyof MainStoreInterface;

export class MainStore implements MainStoreInterface {
  walletStore = new WalletStore();
  smartContracts = new SmartContractsStore();
  currentFirebaseUser = new CurrentFirebaseUserStore();
}

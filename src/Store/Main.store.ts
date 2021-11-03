import { WalletStore } from './Wallet.store';

export interface MainStoreInterface {
  walletStore: WalletStore;
}

export type MainStoreEnum = keyof MainStoreInterface;

export class MainStore implements MainStoreInterface {
  // ui store
  walletStore = new WalletStore();
}

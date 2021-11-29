import { SmartContractsStore } from './SmartContracts.store';
import { CurrentFirebaseUserStore } from './CurrentFirebaseUser.store';
import { WalletStore } from './Wallet.store';
import QuestsStore from './Quests.store';

export interface MainStoreInterface {
  walletStore: WalletStore;
  smartContracts: SmartContractsStore;
  currentFirebaseUser: CurrentFirebaseUserStore;
  questsStore: QuestsStore;
}

export type MainStoreEnum = keyof MainStoreInterface;

export class MainStore implements MainStoreInterface {
  walletStore = new WalletStore();
  smartContracts = new SmartContractsStore();
  currentFirebaseUser = new CurrentFirebaseUserStore();
  questsStore = new QuestsStore();
}

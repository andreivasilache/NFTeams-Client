import { collection, getDocs, getFirestore } from '@firebase/firestore';
import { makeAutoObservable } from 'mobx';
import { FIRESTORE_COLLECTION_KEYS } from '../Shared/constants/FireStoreTableKeys';

export default class QuestsStore {
  private db: any;
  private quests: any;
  constructor() {
    makeAutoObservable(this);
  }

  public initStore = async () => {
    this.db = getFirestore();

    await this.initQuests();
  };

  public initQuests = async () => {
    const localQuests: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS));

    querySnapshot.forEach(doc => {
      localQuests.push({ ...doc.data() });
    });
    this.quests = localQuests;
    console.log(localQuests);
    console.warn(this.quests);
  };
}

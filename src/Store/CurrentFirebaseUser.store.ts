import { doc, getDoc, getFirestore, updateDoc } from '@firebase/firestore';
import { makeAutoObservable } from 'mobx';
import { FIRESTORE_COLLECTION_KEYS } from '../Shared/constants/FireStoreTableKeys';

export class CurrentFirebaseUserStore {
  public db: any;
  public userID: any;
  public currentUserData: any;

  constructor() {
    makeAutoObservable(this);
  }

  public initFirebase = (userID: string) => {
    this.db = getFirestore();
    this.userID = userID;
  };

  public async getCurrentUserData() {
    const docRef = doc(this.db, FIRESTORE_COLLECTION_KEYS.USERS, this.userID);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();

    this.currentUserData = {
      ...userData,
    };
  }

  public async updateUserData(metadata: any) {
    await updateDoc(doc(this.db, FIRESTORE_COLLECTION_KEYS.USERS, this.userID), { ...metadata } as any);
    this.getCurrentUserData();
  }
}

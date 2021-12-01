import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from '@firebase/firestore';
import { makeAutoObservable } from 'mobx';
import { FIRESTORE_COLLECTION_KEYS } from '../Shared/constants/FireStoreTableKeys';

export default class QuestsStore {
  private db: any;
  public quests: any;
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
      localQuests.push({ ...doc.data(), id: doc.id });
    });
    this.quests = localQuests;
    console.log(localQuests);
    console.warn(this.quests);
  };

  public createQuest = async (awardItem: any) => {
    const toBeCreated = {
      description: 'Internal event, may the best person win! https://www.hackerrank.com/innovative-codecraft-december21',
      title: 'Innovative Codecraft December',
      participants: [],
      skillsAward: {
        coding: 15,
        connection: 5,
        karma: 10,
      },
      mainLabel: 'Coding',
      coins: 30,
      awardItem,
    };

    await addDoc(collection(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS), toBeCreated);
  };

  public toggleUserQuestStatus = async (questID: string, userEmail: string, currentQuestParticipants: string[], shouldJoin: boolean) => {
    await updateDoc(doc(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS, questID), {
      participants: shouldJoin ? [...currentQuestParticipants, userEmail] : currentQuestParticipants.filter(email => email !== userEmail),
    } as any);
    this.initQuests();
  };
}

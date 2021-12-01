import { addDoc, collection, doc, getDocs, getFirestore, increment, updateDoc } from '@firebase/firestore';
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

  public rewardPlayers = async ({
    winnersEmails,
    quest,
    userEmailToDataMap,
    giveCoinsToAddressInstance,
    awardNFTInstance,
  }: {
    winnersEmails: string[];
    quest: any;
    userEmailToDataMap: any;
    giveCoinsToAddressInstance: any;
    awardNFTInstance: any;
  }) => {
    const promises: any[] = [];
    winnersEmails.forEach(winner => {
      // FieldValue
      if (quest?.skillsAward) {
        promises.push(
          updateDoc(doc(this.db, FIRESTORE_COLLECTION_KEYS.USERS, userEmailToDataMap[winner].id), {
            'skills.coding': increment(quest?.skillsAward?.coding || 0),
            'skills.connection': increment(quest?.skillsAward?.connection || 0),
            'skills.karma': increment(quest?.skillsAward?.karma || 0),
            'skills.wellness': increment(quest?.skillsAward?.wellness || 0),
            numberOfWonQuests: increment(1),
          } as any),
        );
      }
    });

    winnersEmails.forEach(winner => {
      if (quest?.coins) {
        promises.push(
          new Promise(() =>
            giveCoinsToAddressInstance(userEmailToDataMap[winner].wallet, quest?.coins).then((res: any) =>
              res.wait().then(() => Promise.resolve()),
            ),
          ),
        );
      }

      if (quest?.awardItem) {
        promises.push(
          new Promise(() =>
            awardNFTInstance(
              userEmailToDataMap[winner].wallet,
              JSON.stringify({
                imageURL: `https://gateway.pinata.cloud/ipfs/${quest?.awardItem.ipfs_pin_hash}`,
                metadata: {
                  ...quest?.awardItem.metadata.keyvalues,
                  dateAssigned: +Date.now(),
                  id: quest?.awardItem.id,
                },
              }),
            ).then((res: any) => res.wait().then(() => Promise.resolve())),
          ),
        );
      }
    });

    // if (quest?.coins) {
    //
    // }

    // if (quest?.awardItem) {
    //   promises.push(
    //     awardNFTInstance(
    //       userEmailToDataMap[winner].wallet,
    //       JSON.stringify({
    //         imageURL: `https://gateway.pinata.cloud/ipfs/${quest?.awardItem.ipfs_pin_hash}`,
    //         metadata: {
    //           ...quest?.awardItem.metadata.keyvalues,
    //           dateAssigned: +Date.now(),
    //           id: quest?.awardItem.id,
    //         },
    //       }),
    //     ),
    //   );
    // }

    Promise.all(promises).then(() => {
      alert('Done');
    });
  };
}

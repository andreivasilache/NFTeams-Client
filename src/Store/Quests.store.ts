import { addDoc, collection, doc, getDocs, getFirestore, increment, updateDoc } from '@firebase/firestore';
import { makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';
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

  public createQuest = async ({ description, title, skillsAward, coins, awardItem }: any) => {
    const id = toast.loading('Please wait, creating quest...');
    const toBeCreated = {
      description,
      title,
      participants: [],
      skillsAward: {
        coding: 0,
        connection: 0,
        karma: 0,
        wellness: 0,
        ...skillsAward,
      },
      coins,
      awardItem,
    };

    try {
      await addDoc(collection(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS), toBeCreated);
      toast.update(id, {
        render: 'The quest was successfully created!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        closeButton: true,
      });
    } catch (err: any) {
      toast.update(id, {
        render: 'There was an error creating quest!',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  public toggleUserQuestStatus = async (questID: string, userEmail: string, currentQuestParticipants: string[], shouldJoin: boolean) => {
    const id = toast.loading('Updating user quest status');

    await updateDoc(doc(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS, questID), {
      participants: shouldJoin ? [...currentQuestParticipants, userEmail] : currentQuestParticipants.filter(email => email !== userEmail),
    } as any);
    this.initQuests();
    toast.update(id, {
      render: 'User quest status successfully updated!',
      type: 'success',
      isLoading: false,
      autoClose: 5000,
      closeOnClick: true,
      closeButton: true,
    });
  };

  public rewardPlayers = async ({
    winnersEmails,
    quest,
    userEmailToDataMap,
    giveCoinsToAddressesInstance,
    awardNFTWalletsInstance,
  }: {
    winnersEmails: string[];
    quest: any;
    userEmailToDataMap: any;
    giveCoinsToAddressesInstance: any;
    awardNFTWalletsInstance: any;
  }) => {
    const promises: any[] = [];
    const id = toast.loading('Adding rewards to players...');
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

    const winnersWallets = winnersEmails.map(winner => userEmailToDataMap[winner].wallet);

    const res = await giveCoinsToAddressesInstance(winnersWallets, quest?.coins);

    await res.wait();

    await awardNFTWalletsInstance(
      winnersWallets,
      JSON.stringify({
        imageURL: `https://gateway.pinata.cloud/ipfs/${quest?.awardItem.ipfs_pin_hash}`,
        metadata: {
          ...quest?.awardItem.metadata.keyvalues,
          dateAssigned: +Date.now(),
          id: quest?.awardItem.id,
        },
      }),
    );

    await updateDoc(doc(this.db, FIRESTORE_COLLECTION_KEYS.QUESTS, quest.id), { isFinished: true });

    await Promise.all(promises);
    toast.update(id, {
      render: 'All selected users were rewarded!',
      type: 'success',
      isLoading: false,
      autoClose: 5000,
      closeOnClick: true,
      closeButton: true,
    });
  };
}

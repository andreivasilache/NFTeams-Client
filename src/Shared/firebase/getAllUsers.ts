import { Wallet } from 'ethers';
import { getDocs, collection, getFirestore } from '@firebase/firestore';
import { FIRESTORE_COLLECTION_KEYS } from '../constants/FireStoreTableKeys';

const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(getFirestore(), FIRESTORE_COLLECTION_KEYS.USERS));
  const toBeSavedToState: any = [];
  querySnapshot.forEach(doc => {
    toBeSavedToState.push({
      wallet: new Wallet(doc.data().privateKey).address,
      email: doc.data().email,
      profilePicture: doc.data().profilePicture,
    });
  });
  return toBeSavedToState;
};

export default getAllUsers;

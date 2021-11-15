import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from '@firebase/firestore';
import { Wallet } from '@ethersproject/wallet';

import useIPFSPinata from '../../Hooks/useIPFSPinata';
import useStore from '../../Hooks/useStore';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../Store/SmartContracts.store';
// import { WalletStore } from '../../Store/Wallet.store';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import { FIRESTORE_COLLECTION_KEYS } from '../../Shared/constants/FireStoreTableKeys';
import useCoins from '../../Hooks/useCoints';

const AdminDashBoard = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  // const { wallet } = useStore('walletStore') as WalletStore;
  const { pinataClient, pinFileToIPFSViaAPI } = useIPFSPinata();
  const coinsSM = useCoins();

  const [items, setItems] = useState([]);

  const [assetCreationType, setAssetCreationType] = useState<'badge' | 'NFT'>('badge');
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [users, setUsers] = useState([]);
  const [giveCoinsToUserValue, setGiveCoinsToUserValue] = useState(0);
  const [giveCoinsToUserAddress, setGiveCoinsToUserAddress] = useState('');
  const [giveNFTToAddress, setGiveNFTToAddress] = useState('');

  const loadUsers = async () => {
    const querySnapshot = await getDocs(collection(getFirestore(), FIRESTORE_COLLECTION_KEYS.USERS));
    const toBeSavedToState: any = [];
    querySnapshot.forEach(doc => {
      toBeSavedToState.push({
        wallet: new Wallet(doc.data().privateKey).address,
        email: doc.data().email,
      });
    });
    setUsers(toBeSavedToState);
  };

  useEffect(() => {
    pinataClient
      .pinList({
        status: 'pinned',
      })
      .then((res: any) => {
        setItems(res.rows);
      });
    loadUsers();
  }, []);

  const addAssetToIPFS = () => {
    if (assetCreationType && fileName && fileDescription && uploadedFile) {
      pinFileToIPFSViaAPI(uploadedFile, {
        keyvalues: { type: assetCreationType, company: 'ASSIST', name: fileName, description: fileDescription },
      });
    }
  };

  const sendCoinsToWallet = async () => {
    try {
      await coinsSM.giveCoinsToAddress(giveCoinsToUserAddress, giveCoinsToUserValue);
      alert('sent!');
    } catch (err) {
      alert(err);
    }
  };

  const mintNFT = async (item: any) => {
    try {
      const res = await smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardNFT(
        giveNFTToAddress,
        JSON.stringify({
          imageURL: `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`,
          metadata: {
            ...item.metadata.keyvalues,
            id: item.id,
          },
        }),
      );
      console.log(res);
      alert('Done!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WithAppLayout>
      <div>
        <div
          style={{
            padding: '10px',
            border: '1px solid white',
          }}
        >
          <div>
            <div>Title:</div>
            <input value={fileName} onChange={e => setFileName(e.target.value)} />

            <div>Description:</div>
            <input value={fileDescription} onChange={e => setFileDescription(e.target.value)} />

            <div>File:</div>
            <input type='file' onChange={e => setUploadedFile(e.target.files![0])} />

            <div>Type:</div>
            <input type='radio' value='badge' checked={assetCreationType === 'badge'} onClick={() => setAssetCreationType('badge')} />
            <span>badge</span>
            <input type='radio' value='NFT' checked={assetCreationType === 'NFT'} onClick={() => setAssetCreationType('NFT')} />
            <span>NFT</span>

            <br />
            <br />
            <button type='button' onClick={addAssetToIPFS}>
              Upload to IPFS
            </button>
          </div>
        </div>

        <div
          style={{
            padding: '10px',
            border: '1px solid white',
            marginTop: '10px',
          }}
        >
          Hosted assets:
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              {items.map((item: any) => (
                <div key={item.ipfs_pin_hash}>
                  {item.metadata.keyvalues.type === 'badge' && (
                    <div
                      style={{
                        alignItems: 'center',
                        marginRight: '10px',
                      }}
                    >
                      <img width='200px' height='200px' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
                      <div>{item.metadata.keyvalues.name}</div>
                      <div>{item.metadata.keyvalues.description}</div>
                      <input value={giveNFTToAddress} onChange={e => setGiveNFTToAddress(e.target.value)} />
                      <button type='button' onClick={() => mintNFT(item)}>
                        Send!
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex' }}>
              {items.map((item: any) => (
                <div key={item.ipfs_pin_hash}>
                  {item.metadata.keyvalues.type === 'NFT' && (
                    <>
                      <img width='200px' height='200px' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
                      <div>{item.metadata.keyvalues.name}</div>
                      <div>{item.metadata.keyvalues.description}</div>
                      <input value={giveNFTToAddress} onChange={e => setGiveNFTToAddress(e.target.value)} />
                      <button type='button' onClick={() => mintNFT(item)}>
                        Send!
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '10px',
            border: '1px solid white',
            marginTop: '10px',
          }}
        >
          Users:
          {users.map((user: any) => (
            <>
              <div>{user.email}</div>
              <div>{user.wallet}</div>
            </>
          ))}
        </div>

        <div
          style={{
            padding: '10px',
            border: '1px solid white',
            marginTop: '10px',
          }}
        >
          Give Coins to user:
          <div>Value:</div>
          <input value={giveCoinsToUserValue} onChange={e => setGiveCoinsToUserValue(+e.target.value)} />
          <div>address:</div>
          <input value={giveCoinsToUserAddress} onChange={e => setGiveCoinsToUserAddress(e.target.value)} />
          <button type='button' onClick={sendCoinsToWallet}>
            Send
          </button>
        </div>
      </div>
    </WithAppLayout>
  );
};

export default AdminDashBoard;

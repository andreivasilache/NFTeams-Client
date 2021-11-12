import React, { useEffect, useState } from 'react';
import useIPFSPinata from '../../Hooks/useIPFSPinata';
import useStore from '../../Hooks/useStore';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../Store/SmartContracts.store';
import { WalletStore } from '../../Store/Wallet.store';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';

const AdminDashBoard = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const { wallet } = useStore('walletStore') as WalletStore;
  const { pinataClient, pinFileToIPFSViaAPI } = useIPFSPinata();
  const [items, setItems] = useState([]);
  useEffect(() => {
    pinataClient.pinList().then((res: any) => {
      setItems(res.rows);
    });
  }, []);

  const addImageToIPFS = (file: any) => {
    pinFileToIPFSViaAPI(file, {
      keyvalues: { type: 'avatar' },
    });
  };

  const mintNFT = async () => {
    const imagineGolf4 =
      'https://maxtondesign.com/eng_pl_REAR-BUMPER-EXTENSION-VW-GOLF-4-25TH-ANNIVERSARY-LOOK-with-exhaust-hole-7985_1.jpg';
    try {
      const res = await smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardNFT(wallet?.address, imagineGolf4);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WithAppLayout>
      <div>
        <button type='button' onClick={mintNFT}>
          give myself a NFT :d
        </button>

        <div>
          Host image to IPFS
          <input type='file' onChange={e => addImageToIPFS(e.target.files![0])} />
        </div>

        <div>
          Hosted images:
          <div style={{ display: 'flex' }}>
            {items.map((item: any) => (
              <div key={item.ipfs_pin_hash}>
                <div>{JSON.stringify(item.metadata || '')}</div>
                <img width='200px' height='200px' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </WithAppLayout>
  );
};

export default AdminDashBoard;

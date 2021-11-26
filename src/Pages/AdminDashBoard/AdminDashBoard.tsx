import React, { useEffect, useState } from 'react';
// import { collection, getDocs, getFirestore } from '@firebase/firestore';
// import { Wallet } from '@ethersproject/wallet';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridItem } from '../../Components/GridItem/GridItem';
import HostedAssets from '../../Components/HostedAssets/HostedAssets';

import useIPFSPinata from '../../Hooks/useIPFSPinata';
import useStore from '../../Hooks/useStore';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../Store/SmartContracts.store';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import useCoins from '../../Hooks/useCoints';
import UploadFiles from '../../Components/UploadFiles/UploadFiles';
import AdminMainSection from '../../Components/AdminMainSection/AdminMainSection';
import StyledAdminDashboard from './StyledAdminDashboard';
import getAllUsers from '../../Shared/firebase/getAllUsers';

const AdminDashBoard = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const { pinataClient, pinFileToIPFSViaAPI } = useIPFSPinata();
  const coinsSM = useCoins();

  const [items, setItems] = useState([]);
  const [displayConfirmation, setDisplayConfirmation] = useState(null);
  const [assetCreationType, setAssetCreationType] = useState<'badge' | 'NFT'>('badge');
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const users = await getAllUsers();
    setUsers(users);
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

  const sendCoinsToWallet = async ({ value, users, address }: { value: number; users?: any[]; address?: string }) => {
    if (address) {
      try {
        await coinsSM.giveCoinsToAddress(address, value);
        alert('sent!');
      } catch (err) {
        alert(err);
      }
    }
    if (users) {
      for (let i = 0; i < users?.length; i++) {
        try {
          // eslint-disable-next-line no-await-in-loop
          await coinsSM.giveCoinsToAddress(users[i].wallet, value);
          alert('sent!');
        } catch (err) {
          alert(err);
        }
      }
    }
  };

  const mintNFT = async (item: any, giveNFTToAddresses: string[]) => {
    for (let i = 0; i < giveNFTToAddresses.length; i++) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const res = await smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardNFT(
          giveNFTToAddresses[i],
          JSON.stringify({
            imageURL: `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`,
            metadata: {
              ...item.metadata.keyvalues,
              dateAssigned: +Date.now(),
              id: item.id,
            },
          }),
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    setDisplayConfirmation(item);
    setTimeout(() => {
      setDisplayConfirmation(null);
    }, 6000);
  };

  const windowHeight = window.innerHeight;
  return (
    <WithAppLayout>
      <StyledAdminDashboard>
        <Box sx={{ flexGrow: 1 }}>
          {/* <AdminMainCenter className='admin-dashboard-background' /> */}
          <Grid container rowSpacing={8} columnSpacing={3}>
            <Grid item xs={12}>
              <Grid container rowSpacing={10} columnSpacing={6}>
                <Grid item xs={5}>
                  <GridItem height={windowHeight * 0.32} hasBackground={false} overflowY={false}>
                    <HostedAssets items={items} users={users} mintNTF={mintNFT} />
                  </GridItem>
                </Grid>
                <Grid item xs={7}>
                  <GridItem height={windowHeight * 0.32} hasBackground={false}>
                    <UploadFiles
                      fileName={fileName}
                      description={fileDescription}
                      setFileName={setFileName}
                      setDescription={setFileDescription}
                      setUploadFile={file => setUploadedFile(file)}
                      setUploadType={setAssetCreationType}
                      creationType={assetCreationType}
                      selectedFile={uploadedFile}
                      confirmUploadFile={addAssetToIPFS}
                    />
                  </GridItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <GridItem height={windowHeight * 0.52} hasBackground={false}>
                <AdminMainSection
                  sendCoins={sendCoinsToWallet}
                  users={users}
                  displayConfirmation={!!displayConfirmation}
                  item={displayConfirmation}
                  handleClickAway={() => setDisplayConfirmation(null)}
                />
              </GridItem>
            </Grid>
          </Grid>
        </Box>
      </StyledAdminDashboard>
    </WithAppLayout>
  );
};

export default AdminDashBoard;

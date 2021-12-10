import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
  const [activeItem, setActiveItem] = useState(null);
  const [confirmTokensSend, setConfirmTokensSend] = useState(false);
  const [displayApproval, setDisplayApproval] = useState<any | null>(null);
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
        pageLimit: 200,
      })
      .then((res: any) => {
        setItems(res.rows);

        // use this to manually add an item to the quests.
        // const mockQuest = () => {
        //   questStore.createQuest(res.rows[0]);
        // };

        // (window as any).createQuest = mockQuest;
      });
    loadUsers();
  }, []);

  const addAssetToIPFS = async () => {
    const id = toast.loading('Please wait, uploading the file to IPFS.');

    if (assetCreationType && fileName && fileDescription && uploadedFile) {
      try {
        await pinFileToIPFSViaAPI(uploadedFile, {
          keyvalues: { type: assetCreationType, company: 'ASSIST', name: fileName, description: fileDescription },
        });
        toast.update(id, {
          render: 'File uploaded.',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      } catch (err) {
        toast.update(id, {
          render: 'Unknown error',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      }
    }
  };

  const sendCoinsToWallet = async ({ value, users, address }: { value: number; users?: any[]; address?: string }) => {
    const id = toast.loading('Please wait, adding tokens to user...');

    if (address) {
      try {
        const coinsAdd = await coinsSM.giveCoinsToAddress(address, value);
        await coinsAdd.wait();
        setConfirmTokensSend(true);
        toast.update(id, {
          render: 'Tokens added successfully',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      } catch (err: any) {
        toast.update(id, {
          render: err.message || 'There was an error while trying to send tokens to users!',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      }
    }
    if (users) {
      const wallets = users.map(user => user.wallet);
      try {
        // eslint-disable-next-line no-await-in-loop
        const coinsAdd = await coinsSM.giveCoinsToAddresses(wallets, value);

        await coinsAdd.wait();

        setConfirmTokensSend(true);
        setTimeout(() => {
          setConfirmTokensSend(false);
        }, 5000);
        toast.update(id, {
          render: 'Tokens added successfully',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      } catch (err: any) {
        toast.update(id, {
          render: err.message || 'There was an error while trying to send tokens to users!',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      }
    }
  };

  const mintNFT = async (item: any, giveNFTToAddresses: string[]) => {
    const id = toast.loading('Please wait, adding NFT to user...');

    try {
      // eslint-disable-next-line no-await-in-loop
      const res = await smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardMultipleWallets(
        giveNFTToAddresses,
        JSON.stringify({
          imageURL: `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`,
          metadata: {
            ...item.metadata.keyvalues,
            dateAssigned: +Date.now(),
            id: item.id,
          },
        }),
      );
      await res.wait();
      toast.update(id, {
        render: 'NFT added successfully',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        closeButton: true,
      });
      setDisplayConfirmation(item);
      setTimeout(() => {
        setDisplayConfirmation(null);
      }, 5000);
    } catch (err: any) {
      toast.update(id, {
        render: err.message || 'There was an error while trying to send NFT to users!',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  const handleHideModals = () => {
    setDisplayConfirmation(null);
    setDisplayApproval(null);
    setConfirmTokensSend(false);
    setActiveItem(null);
  };

  const handleApproveMintNFT = () => {
    if (!displayApproval) {
      return;
    }
    mintNFT(displayApproval.item, displayApproval.giveNFTToAddresses);
    setDisplayApproval(null);
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
                    <HostedAssets
                      items={items}
                      users={users}
                      mintNTF={(item: any, giveNFTToAddresses: string[]) => setDisplayApproval({ item, giveNFTToAddresses })}
                      setActiveItem={setActiveItem}
                    />
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
                  item={displayConfirmation || displayApproval?.item || activeItem}
                  confirmTokensSend={confirmTokensSend}
                  handleClickAway={() => handleHideModals()}
                  displayApproval={displayApproval !== null}
                  approve={handleApproveMintNFT}
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

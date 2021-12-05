import React, { useEffect, useState } from 'react';
import InputDataDecoder from 'ethereum-input-data-decoder';
import moment from 'moment';

import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../../Store/SmartContracts.store';
import useAccountTransactions from '../../../Hooks/useAccountTransactions';
import useStore from '../../../Hooks/useStore';
import getAllUsers from '../../../Shared/firebase/getAllUsers';
import { WalletStore } from '../../../Store/Wallet.store';
import StyledTokensAndStats from './StyledTokensAndStats';
import redirectIcon from '../../../assets/svg/redirect.svg';

const TokensAndStats = () => {
  const [currentWalletHistory, setCurrentWalletHistory] = useState<any>([]);
  const { wallet } = useStore('walletStore') as WalletStore;
  const currentWalletTransactions = useAccountTransactions(wallet!.address);
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const loadTransactions = async () => {
    const users = await getAllUsers();
    const walletToAddressMap: any = {};
    const parsedTransactions: any = [];
    users.forEach((user: any) => {
      walletToAddressMap[user.wallet.toLowerCase()] = user.email;
    });

    const NFTDecoder = new InputDataDecoder(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.GENERATE_NFT].abi);
    const coinDecoder = new InputDataDecoder(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.COINS_PROVIDER].abi);

    currentWalletTransactions.result.forEach((transaction: any) => {
      const decodedInputNFT = NFTDecoder.decodeData(transaction.input);
      const decodedCoin = coinDecoder.decodeData(transaction.input);

      const nftReceiver = decodedInputNFT.inputs[0];
      const coinReceiver = decodedCoin.inputs[0];

      const smartContractReceiverAddress = nftReceiver || coinReceiver;

      parsedTransactions.push({
        from: (walletToAddressMap[transaction.from] && 'ASSIST') || 'unknown',
        to: smartContractReceiverAddress ? walletToAddressMap[`0x${smartContractReceiverAddress}`] : 'unknown',
        timeStamp: transaction.timeStamp,
        redirectTo: `https://polygonscan.com/tx/${transaction.hash}`,
      });
    });

    setCurrentWalletHistory(parsedTransactions);
  };

  useEffect(() => {
    if (currentWalletTransactions) loadTransactions();
  }, [JSON.stringify(currentWalletTransactions)]);

  return (
    <StyledTokensAndStats>
      <span className='info'>transaction history</span>
      <div>
        <table className='transactions'>
          <tr>
            <th>from</th>
            <th>to</th>
            <th>date</th>
            <th />
          </tr>

          {currentWalletHistory.map((transaction: any) => (
            <tr key={transaction.timeStamp}>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{moment.unix(+transaction.timeStamp).format('DD/MM HH:mm')}</td>
              <td
                onClick={() => {
                  window.open(transaction.redirectTo, '_blank')?.focus();
                }}
              >
                <img src={redirectIcon} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </StyledTokensAndStats>
  );
};

export default TokensAndStats;

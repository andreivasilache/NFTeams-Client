import React, { useEffect, useState } from 'react';
import InputDataDecoder from 'ethereum-input-data-decoder';

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

    const decoder = new InputDataDecoder(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.GENERATE_NFT].abi);
    currentWalletTransactions.result.forEach((transaction: any) => {
      const decodedInput = decoder.decodeData(transaction.input);
      const to = decodedInput.inputs[0];

      parsedTransactions.push({
        from: walletToAddressMap[transaction.from_address] || 'unknown',
        to: to ? walletToAddressMap[`0x${to}`] : 'unknown',
        date: transaction.block_timestamp,
        redirectTo: `https://ropsten.etherscan.io/tx/${transaction.hash}`,
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
            <tr key={transaction.date}>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(transaction.date))}</td>
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

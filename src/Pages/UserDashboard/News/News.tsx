import React, { useEffect, useRef, useState } from 'react';
import InputDataDecoder from 'ethereum-input-data-decoder';
import { ethers } from 'ethers';

import StyledNews from './StyledNews';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import NewsFeedItem from '../../../Components/NewsFeedItem/NewsFeedItem';
import news1 from '../../../assets/png/news1.png';
import useAccountTransactions from '../../../Hooks/useAccountTransactions';
import getAllUsers from '../../../Shared/firebase/getAllUsers';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../../Store/SmartContracts.store';
import useStore from '../../../Hooks/useStore';
import redirectIcon from '../../../assets/svg/redirect.svg';
import ASSISTLogo from '../../../assets/png/assist-logo.png';

const news = [
  {
    userImg: ASSISTLogo,
    userName: 'ASSIST',
    dateTime: '2021-11-08',
    tag: 'Company',
    title: 'Super truper',
    contentImg: news1,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

const NewsPreview = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const [currentUserNews, setCurrentUserNews] = useState([]);
  const usersAddressToEmailMap = useRef<any>({});

  const NFTTransactions = useAccountTransactions(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.GENERATE_NFT].address);
  const coinsTransactions = useAccountTransactions(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.COINS_PROVIDER].address);

  const loadTransactions = async () => {
    const users = await getAllUsers();
    const walletToAddressMap: any = {};
    const parsedTransactions: any = [];

    users.forEach((user: any) => {
      walletToAddressMap[user.wallet.toLowerCase()] = user.email;
      usersAddressToEmailMap.current[user.wallet.toLowerCase()] = user.email;
    });

    const nftDecoder = new InputDataDecoder(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.GENERATE_NFT].abi);
    const coinsDecoder = new InputDataDecoder(smartContractsStore.smartContracts[SMART_CONTRACTS_ENUM.COINS_PROVIDER].abi);

    NFTTransactions.result.forEach((transaction: any) => {
      const decodedTrans = nftDecoder.decodeData(transaction.input);

      if (decodedTrans.method === 'awardMultipleWallets') {
        decodedTrans.inputs[0].forEach((wallet: any) => {
          parsedTransactions.push({
            type: 'NFT',
            timestamp: transaction.timeStamp,
            receiver: wallet,
            itemName: JSON.parse(decodedTrans.inputs[1]).metadata.name,
            company: JSON.parse(decodedTrans.inputs[1]).metadata.company,
            itemImageSrc: JSON.parse(decodedTrans.inputs[1]).imageURL,
            redirectTo: `https://polygonscan.com/tx/${transaction.hash}`,
            smartContractName: 'awardMultipleWallets',
          });
        });
      }
    });

    coinsTransactions.result.forEach((transaction: any) => {
      const decodedTrans = coinsDecoder.decodeData(transaction.input);
      console.log(decodedTrans);
      if (decodedTrans.method === 'sendCoinsToAdresses') {
        decodedTrans.inputs[0].forEach((wallet: any) => {
          parsedTransactions.push({
            type: 'coins',
            timestamp: transaction.timeStamp,
            receiver: wallet,
            amount: ethers.utils.formatEther(`${decodedTrans.inputs[1]}`),
            redirectTo: `https://polygonscan.com/tx/${transaction.hash}`,
            smartContractName: 'sendCoinsToAddresses',
          });
        });
      }

      if (decodedTrans.method === 'sendCoinsToAdress') {
        parsedTransactions.push({
          type: 'coins',
          timestamp: transaction.timeStamp,
          receiver: decodedTrans.inputs[0],
          amount: ethers.utils.formatEther(`${decodedTrans.inputs[1]}`),
          redirectTo: `https://polygonscan.com/tx/${transaction.hash}`,
          smartContractName: 'sendCoinsToAddress-kudos',
        });
      }

      if (decodedTrans.method === 'withdrawCoins') {
        parsedTransactions.push({
          type: 'market',
          timestamp: transaction.timeStamp,
          receiver: decodedTrans.inputs[0],
          amount: ethers.utils.formatEther(`${decodedTrans.inputs[1]}`),
          redirectTo: `https://polygonscan.com/tx/${transaction.hash}`,
          smartContractName: 'sendCoinsToAddress-market',
        });
      }
    });

    parsedTransactions.sort((a: any, b: any) => b.timestamp - a.timestamp);

    setCurrentUserNews(parsedTransactions);
  };

  useEffect(() => {
    if (NFTTransactions && coinsTransactions) loadTransactions();
  }, [JSON.stringify(NFTTransactions), JSON.stringify(coinsTransactions)]);

  return (
    <StyledNews>
      <CustomCardHeader title='events' viewMoreRoute='/communities' />

      <div className='users-news'>
        {currentUserNews.map(
          (transaction: any) =>
            (transaction.type === 'NFT' && (
              <div className='event'>
                <img className='event__logo' src={transaction.itemImageSrc} />
                <div>
                  <b>{usersAddressToEmailMap.current[`0x${transaction?.receiver?.toLowerCase()}`]}</b> received{' '}
                  <b>{transaction.itemName}</b> from {transaction.company}.{' '}
                  <span className='event__method'>{transaction.smartContractName}</span>
                  <span className='event__redirect'>
                    <img src={redirectIcon} onClick={() => window.open(transaction.redirectTo, '_blank')?.focus()} />
                  </span>
                </div>
              </div>
            )) ||
            (transaction.type === 'coins' && (
              <div className='event'>
                <img className='event__logo' src={ASSISTLogo} />
                <div>
                  <b>{usersAddressToEmailMap.current[`0x${transaction?.receiver?.toLowerCase()}`]}</b> received <b>{transaction.amount}</b>{' '}
                  from ASSIST. <span className='event__method'>{transaction.smartContractName}</span>
                  <span className='event__redirect'>
                    <img src={redirectIcon} onClick={() => window.open(transaction.redirectTo, '_blank')?.focus()} />
                  </span>
                </div>
              </div>
            )) ||
            (transaction.type === 'market' && (
              <div className='event'>
                <img className='event__logo' src={ASSISTLogo} />
                <div>
                  <b>{usersAddressToEmailMap.current[`0x${transaction?.receiver?.toLowerCase()}`]}</b> bought an item from the market of
                  value <b>{transaction.amount}</b> <span className='event__method'>{transaction.smartContractName}</span>
                  <span className='event__redirect'>
                    <img src={redirectIcon} onClick={() => window.open(transaction.redirectTo, '_blank')?.focus()} />
                  </span>
                </div>
              </div>
            )),
        )}
      </div>

      <div className='list'>
        {news.map(el => (
          <NewsFeedItem
            key={el.dateTime}
            userImg={el.userImg}
            userName={el.userName}
            dateTime={el.dateTime}
            tag={el.tag}
            title={el.title}
            contentImg={el.contentImg}
            content={el.content}
          />
        ))}
      </div>
    </StyledNews>
  );
};

export default NewsPreview;

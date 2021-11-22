import useFetch from 'use-http';

const useAccountTransactions = (walletPublicID: string) => {
  const { data: transactions } = useFetch(
    `https://api-ropsten.etherscan.io/api?module=account&apikey=${process.env.REACT_APP_ETHERSCAN_API}&action=txlist&address=${walletPublicID}&sort=desc`,
    [walletPublicID],
  );

  return transactions;
};

export default useAccountTransactions;

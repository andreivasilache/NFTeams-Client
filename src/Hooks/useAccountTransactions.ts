import useFetch from 'use-http';

const useAccountTransactions = (walletPublicID: string) => {
  const { data: transactions } = useFetch(
    `https://api.polygonscan.com/api?module=account&apikey=${process.env.REACT_APP_POLYGONSCAN_API}&action=txlist&address=${walletPublicID}&sort=desc&startBlock=1&&endblock=99999999`,
    [walletPublicID],
  );

  return transactions;
};

export default useAccountTransactions;

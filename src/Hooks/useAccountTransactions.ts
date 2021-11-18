import useFetch from 'use-http';

const useAccountTransactions = (walletPublicID: string) => {
  const { data: transactions } = useFetch(
    `https://deep-index.moralis.io/api/v2/${walletPublicID}?chain=ropsten`,
    globalOptions => {
      (globalOptions.headers as any)['x-api-key'] = process.env.REACT_APP_MORALIS_KEY;
      return globalOptions;
    },
    [walletPublicID],
  );

  return transactions;
};

export default useAccountTransactions;

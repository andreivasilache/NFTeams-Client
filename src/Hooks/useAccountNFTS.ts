import useFetch from 'use-http';

const useAccountNFTS = (walletPublicID: string) => {
  const { data: NFTS } = useFetch(
    `https://deep-index.moralis.io/api/v2/${walletPublicID}/nft?chain=ropsten`,
    globalOptions => {
      (globalOptions.headers as any)['x-api-key'] = process.env.REACT_APP_MORALIS_KEY;
      return globalOptions;
    },
    [walletPublicID],
  );

  return NFTS;
};

export default useAccountNFTS;

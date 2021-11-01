import * as ethers from 'ethers';

export const initEthWalletAndInfuraSmartContracts = (privateKey: string) => {
  const { Wallet, providers } = ethers;
  // const Contract = ethers.Contract;
  // const utils = ethers.utils;
  // const providers = ethers.providers;

  const network: 'ropsten' | 'kovan' | 'rinkeby' | 'homestead' = 'ropsten';

  const infuraAPIKey = process.env.REACT_APP_INFURA_API_KEY;

  const infuraProvider = new providers.InfuraProvider(network, infuraAPIKey);

  const wallet = new Wallet(`0x${privateKey}`, infuraProvider);

  return { wallet, infuraProvider };
};

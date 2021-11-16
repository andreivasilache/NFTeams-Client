// import useFetch from 'use-http';

import pinataClient from '@pinata/sdk';
import useFetch from 'use-http';

const pinataURI = 'https://api.pinata.cloud';

const client = pinataClient(process.env.REACT_APP_PINATA_API_KEY as any, process.env.REACT_APP_PIANA_API_SECRET as any);
const useIPFSPinata = () => {
  const { post: _pinFileToIPFS } = useFetch(`${pinataURI}/pinning/pinFileToIPFS`, globalOptions => {
    (globalOptions as any).headers.pinata_api_key = `${process.env.REACT_APP_PINATA_API_KEY}`;
    (globalOptions as any).headers.pinata_secret_api_key = `${process.env.REACT_APP_PIANA_API_SECRET}`;
    return globalOptions;
  });

  const pinFileToIPFSViaAPI = async (file: any, metadata?: any, pinataOptions?: any) => {
    const formData = new FormData();
    formData.append('file', file);

    if (metadata) formData.append('pinataMetadata', JSON.stringify(metadata));
    if (pinataOptions) formData.append('pinataOptions', JSON.stringify(pinataOptions));

    return _pinFileToIPFS(formData, {
      withCredentials: true,
      maxBodyLength: 'Infinity',
    });
  };

  return {
    pinFileToIPFSViaAPI,
    pinataClient: client,
  };
};
export default useIPFSPinata;

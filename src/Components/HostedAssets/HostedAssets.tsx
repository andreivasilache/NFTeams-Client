import React, { useState } from 'react';
import StyledHostedAssets from './StyledHostedAssets';
import { ReactComponent as HostedAssetsContainer } from '../../assets/svg/hostedAssetsStructure.svg';
import AssetsComponent from './AssetsComponent/AssetsComponent';
import Users from '../Users/Users';
import CustomSquareButton from '../CustomSquareButton/CustomSquareButton';
// import HotAssetContainer from './HotAssetContainer/HotAssetContainer';

interface Props {
  items: any[];
  users: any[];
  mintNTF: (item: any, giveNFTToAddresses: string[]) => void;
  setActiveItem: (item: any) => void;
}

const HostedAssets = ({ items = [], users = [], mintNTF, setActiveItem }: Props) => {
  const [isAssetsActive, setIsAssetsActive] = useState(true);
  const [selectedItem, setSelectedItem] = useState();
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

  return (
    <StyledHostedAssets>
      <span className='title'>HOSTED ASSETS</span>
      <HostedAssetsContainer className='hosted-assets__container' />
      <div className='hosted-assets__content'>
        <div className='hosted-assets__tabs'>
          <div
            className={`hosted-assets__tab ${isAssetsActive ? 'hosted-assets__tab--active' : ''}`}
            onClick={() => setIsAssetsActive(true)}
          >
            Assets
          </div>
          <div
            className={`hosted-assets__tab ${!isAssetsActive ? 'hosted-assets__tab--active' : ''}`}
            onClick={() => setIsAssetsActive(false)}
          >
            Badges
          </div>
        </div>
        <div className='hosted-assets__badges-list'>
          <AssetsComponent
            items={items}
            selectItem={(item: any) => {
              setSelectedItem(item);
              setActiveItem(item);
            }}
            isAssetsSelected
            selectedItem={selectedItem}
          />
        </div>
        <div className='hosted-assets__users'>
          <Users users={users} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
          <div className='hosted-assets__actions'>
            <CustomSquareButton
              width='105px'
              handleClick={() =>
                mintNTF(
                  selectedItem,
                  selectedUsers.map(user => user.wallet),
                )
              }
              text='Assign to user'
            />
          </div>
        </div>
      </div>
    </StyledHostedAssets>
  );
};

export default HostedAssets;

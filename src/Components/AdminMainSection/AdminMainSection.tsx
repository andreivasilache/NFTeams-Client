import React, { useState } from 'react';
import StyledAdminMainSection from './StyledAdminMainSection';
import { ReactComponent as AdminMainLeftBackground } from '../../assets/svg/left-container.svg';
import { ReactComponent as AdminMainRight } from '../../assets/svg/right-container.svg';
import { ReactComponent as AdminMainCenter } from '../../assets/svg/main-content.svg';
import ConfirmAsset from '../ConfirmAsset/ConfirmAsset';
import AddTokens from './AddTokens/AddTokens';
import CustomButton from '../CustomButton/CustomButton';
import CustomSquareButton from '../CustomSquareButton/CustomSquareButton';

interface Props {
  displayConfirmation: boolean;
  displayApproval:boolean;
  item: any;
  users: any[];
  handleClickAway: () => void;
  sendCoins: ({ value, users, address }: { value: number; users: any[]; address: string }) => void;
  approve: () => void;
}

const AdminMainSection = ({displayApproval, displayConfirmation = false, item, users = [], handleClickAway, sendCoins, approve }: Props) => {
  const [tokensValue, setTokensValue] = useState(0);
  const [address, setAddress] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

  const handleClickSend = () => {
    sendCoins({ value: tokensValue, users: selectedUsers, address });
    setSelectedUsers([]);
    setAddress('');
  };

  return (
    <StyledAdminMainSection>
      <AdminMainLeftBackground className='left-background' />
      <span className='admin-main__title'>COMAND CENTER</span>
      <span className='admin-main__tokens'> TOKENS </span>
      <span className='admin-main__analytics'> ANALYTICS </span>
      <div className='admin-main__add-tokens'>
        <AddTokens
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          users={users}
          tokensNumber={tokensValue}
          address={address}
          setAddress={setAddress}
          setTokens={setTokensValue}
        />
        <div className='admin-main__add-tokens-actions'>
          <CustomButton buttonText='Send' handleClick={handleClickSend} />
        </div>
      </div>

      <AdminMainCenter className='center-background' />
      {displayConfirmation && (
        <div className='confirm-asset'>
          <ConfirmAsset handleClickAway={handleClickAway}>
              <span className='confirm-asset__name'>{item.metadata.name}</span>
              <img className='confirm-asset__image' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
          </ConfirmAsset>
        </div>
      )}

      {displayApproval && (
        <div className='confirm-asset'>
          <ConfirmAsset handleClickAway={handleClickAway}>
            <div>test</div>
            <CustomSquareButton text='Confirm' handleClick={approve} />
          </ConfirmAsset>
        </div>
      )}
      <AdminMainRight className='right-background' />
      <div className='admin-main__right-button'>
        <CustomButton buttonText='Extract Report' handleClick={() => {}} />
      </div>
    </StyledAdminMainSection>
  );
};

export default AdminMainSection;

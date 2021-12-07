import React, { useState } from 'react';
import StyledAdminMainSection from './StyledAdminMainSection';
import { ReactComponent as AdminMainLeftBackground } from '../../assets/svg/left-container.svg';
import { ReactComponent as AdminMainRight } from '../../assets/svg/right-container.svg';
import { ReactComponent as AdminMainCenter } from '../../assets/svg/main-content.svg';
import ConfirmAsset from '../ConfirmAsset/ConfirmAsset';
import AddTokens from './AddTokens/AddTokens';
import CustomButton from '../CustomButton/CustomButton';
import CustomSquareButton from '../CustomSquareButton/CustomSquareButton';
import coinImg from '../../assets/png/coinIcon.png';

interface Props {
  displayConfirmation: boolean;
  displayApproval: boolean;
  confirmTokensSend: boolean;
  item: any;
  users: any[];
  handleClickAway: () => void;
  sendCoins: ({ value, users, address }: { value: number; users: any[]; address: string }) => void;
  approve: () => void;
}

const AdminMainSection = ({
  displayApproval,
  displayConfirmation = false,
  item,
  users = [],
  confirmTokensSend = false,
  handleClickAway,
  sendCoins,
  approve,
}: Props) => {
  const [tokensValue, setTokensValue] = useState(0);
  const [address, setAddress] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [isApproveSendTokens, setIsApproveSendTokens] = useState(false);

  const handleClickSend = () => {
    sendCoins({ value: tokensValue, users: selectedUsers, address });
    setSelectedUsers([]);
    setAddress('');
    setIsApproveSendTokens(false);
  };

  return (
    <StyledAdminMainSection>
      <AdminMainLeftBackground className='left-background' />
      <span className='admin-main__title'>COMMAND CENTER</span>
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
          <CustomButton buttonText='Send' handleClick={() => setIsApproveSendTokens(true)} />
        </div>
      </div>

      <AdminMainCenter className='center-background' />
      {(displayConfirmation || confirmTokensSend || item) && (
        <div className='confirm-asset'>
          <ConfirmAsset handleClickAway={handleClickAway}>
            <span className='confirm-asset__name'>{confirmTokensSend || displayConfirmation ? 'Success!' : item.metadata.keyvalues.name}</span>
            <img
              className='confirm-asset__image'
              src={confirmTokensSend ? coinImg : `https://gateway.pinata.cloud/ipfs/${item?.ipfs_pin_hash}`}
            />
          </ConfirmAsset>
        </div>
      )}

      {(displayApproval || isApproveSendTokens) && (
        <div className='confirm-asset'>
          <ConfirmAsset handleClickAway={isApproveSendTokens ? () => setIsApproveSendTokens(false) : handleClickAway}>
            <span className='confirm-asset__name'>Confirm</span>
            <img
              className='confirm-asset__image confirm-asset__image--confirmation'
              src={isApproveSendTokens ? coinImg : `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`}
            />

            <div className='confirm-asset__information'>
              {displayApproval && `Please confirm you want to assign this ${item.metadata.keyvalues.type} to selected users!`}
              {isApproveSendTokens && `Please confirm you want to send ${tokensValue} tokens to selected users!`}
            </div>
            <div className='confirm-asset__confirm-button'>
              <CustomSquareButton text='Confirm' handleClick={isApproveSendTokens ? handleClickSend : approve} />
            </div>
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

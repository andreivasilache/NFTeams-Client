import React, { useState } from 'react';
import StyledAdminMainSection from './StyledAdminMainSection';
import { ReactComponent as AdminMainLeftBackground } from '../../assets/svg/left-container.svg';
import { ReactComponent as AdminMainRight } from '../../assets/svg/right-container.svg';
import { ReactComponent as AdminMainCenter } from '../../assets/svg/main-content.svg';
import ConfirmAsset from '../ConfirmAsset/ConfirmAsset';
import AddTokens from './AddTokens/AddTokens';
import CustomButton from '../CustomButton/CustomButton';

interface Props{
  displayConfirmation:boolean;
  item:any;
  users:any[];
  handleClickAway:() => void;
  sendCoins:({value, users, address}:{value:number, users:any[], address:string}) => void;
}

const AdminMainSection = ({displayConfirmation = false, item, users=[], handleClickAway, sendCoins}:Props) => {
    const [tokensValue, setTokensValue] = useState(0);
    const [address, setAddress] = useState('');
    const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

    const handleClickSend = () => {
      sendCoins({value:tokensValue, users:selectedUsers,address})
      setSelectedUsers([])
      setAddress('')
    }

  return (
  <StyledAdminMainSection>
    <AdminMainLeftBackground className='left-background' />
    <span className='admin-main__title'>COMAND CENTER</span>
    <span className='admin-main__tokens'> TOKENS </span>
    <span className='admin-main__analytics'> ANALYTICS </span>
    <div className='admin-main__add-tokens'>
       <AddTokens selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} users={users} tokensNumber={tokensValue} address={address} setAddress={setAddress} setTokens={setTokensValue}/>
       <div className='admin-main__add-tokens-actions'>
          <CustomButton buttonText='SendCoin' handleClick={handleClickSend} />
      </div>
    </div>

    <AdminMainCenter className='center-background' />
    {displayConfirmation && <div className='confirm-asset'>
      <ConfirmAsset item={item} handleClickAway ={handleClickAway} />
    </div>}
    <AdminMainRight className='right-background' />
  </StyledAdminMainSection>
)};

export default AdminMainSection;

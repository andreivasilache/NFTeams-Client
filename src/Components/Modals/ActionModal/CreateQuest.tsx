import React, { useEffect, useState } from 'react';
// import { FormControl, MenuItem, Select } from '@mui/material';
import WithModal from '../../../HOCs/WithModal/WithModal';
import StyledCreateQuests from './StyledCreateQuests';
import codeIcon from '../../../assets/png/codeIcon.png';
import coinIcon from '../../../assets/png/coinIcon.png';
import socialIcon from '../../../assets/png/socialIcon.png';
import healthIcon from '../../../assets/png/healthIcon.png';
import karmaIcon from '../../../assets/png/karmaIcon.png';
import CustomSquareButton from '../../CustomSquareButton/CustomSquareButton';
import {ReactComponent as DropDownIcon} from '../../../assets/svg/dropDownIcon.svg'
import useIPFSPinata from '../../../Hooks/useIPFSPinata';

const statsIcons = {
  tokens: coinIcon,
  coding: codeIcon,
  social: socialIcon,
  health: healthIcon,
  karma: karmaIcon,
};

interface Props {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

const CreateQuest = ({ isModalOpen = false, onCloseModal }: Props) => {
  const { pinataClient } = useIPFSPinata();
  const [selectedBadge, setSelectedBadge] = useState<any>(null)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectActive, setSelectActive] = useState(false);
  const [items, setItems] = useState([]);
  const [statsValue, setStatsValue] = useState({
    tokens: 0,
    coding: 0,
    social: 0,
    health: 0,
    karma: 0,
  });

  useEffect(() => {
    pinataClient
      .pinList({
        status: 'pinned',
      })
      .then((res: any) => {
        setItems(res.rows);
      });
  }, []);

  console.log(setStatsValue);

  // @ts-ignore
  const getImage = (item: any) => statsIcons[item];

  // @ts-ignore
  const getStatValue = (item: any) => statsValue[item];

  // @ts-ignore
  const updateStatValue = (item: any, value) => setStatsValue({ ...statsValue, [item]: parseInt(value, 10) });

  console.log(items)


  const handleSelect = (item:any) => {
    setSelectActive(false);
    setSelectedBadge(item)
  }

  return (
    <WithModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} modalType='action'>
      <StyledCreateQuests onClick={e => e.stopPropagation()}>
        <div className='quests-modal__title'>Create quest</div>
        <div className='quests-modal__content'>
          <div className='quests-modal__input-container'>
            <div className='quests-modal__input-title'>Title</div>
            <input value={title} onChange={e => setTitle(e.target.value)} className='quests-modal__input' type='text' />
          </div>
          <div className='quests-modal__input-container'>
            <div className='quests-modal__input-title'>Description</div>
            <input value={description} onChange={e => setDescription(e.target.value)} className='quests-modal__input' type='text' />
          </div>
          <div className='quests-modal__stats-won'>
            {Array.from(Object.keys(statsValue)).map((item: any) => (
              <div className='quests-modal__stat' key={item}>
                <div className='quests-modal__input-container'>
                  <div className='quests-modal__input-title'>
                    <img className='quests-modal__title-image' src={getImage(item)} alt='code' />
                    {item}
                  </div>
                  <input
                    value={getStatValue(item)}
                    onChange={e => updateStatValue(item, e.target.value)}
                    className='quests-modal__input quests-modal__input--stat-input'
                    type='text'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='quests-modal__input-container quests-modal__input-container--select'>
              <input 
                  value={selectedBadge?.metadata?.keyvalues?.name || ''} 
                  className='quests-modal__select-input' 
                  placeholder='Select award badge' 
                  onClick={() => setSelectActive(!selectActive)} />
              <DropDownIcon  className={`quests-modal__drop-down-icon ${selectActive ? 'quests-modal__drop-down-icon--active':''}`} />
              <div className={`quests-modal__select-options ${selectActive ? 'quests-modal__select-options--active':''}`}>
                {items.filter((item:any) => item.metadata.keyvalues.type==='badge').map((item:any) => (
                  <div className='quests-modal__option' key={item.ipfs_pin_hash} onClick={() => handleSelect(item)}>
                    <span> {item.metadata.keyvalues.name}</span>
                    <img className='quests-modal__option-image' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
                  </div>
                ))}
              </div>
          </div>
          <div className='quests-modal__actions'>
            <CustomSquareButton text='Save quest' handleClick={() => {}} width='107px' isWithTopRight />
          </div>
        </div>
      </StyledCreateQuests>
    </WithModal>
  );
};

export default CreateQuest;

import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import WithModal from '../../../HOCs/WithModal/WithModal';
import StyledCreateQuests from './StyledCreateQuests';
import codeIcon from '../../../assets/png/codeIcon.png';
import coinIcon from '../../../assets/png/coinIcon.png';
import socialIcon from '../../../assets/png/socialIcon.png';
import healthIcon from '../../../assets/png/healthIcon.png';
import karmaIcon from '../../../assets/png/karmaIcon.png';
import CustomSquareButton from '../../CustomSquareButton/CustomSquareButton';

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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [statsValue, setStatsValue] = useState({
    tokens: 0,
    coding: 0,
    social: 0,
    health: 0,
    karma: 0,
  });

  console.log(setStatsValue);

  // @ts-ignore
  const getImage = (item: any) => statsIcons[item];

  // @ts-ignore
  const getStatValue = (item: any) => statsValue[item];

  // @ts-ignore
  const updateStatValue = (item: any, value) => setStatsValue({ ...statsValue, [item]: parseInt(value, 10) });

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
          <div className='quests-modal__input-container'>
            <FormControl fullWidth size='small'>
              <Select
                id='select option'
                placeholder='Select award badge'
                classes={{ root: 'quests-modal__select' }}
                MenuProps={{
                  classes: {
                    root: 'quests-modal__menu',
                  },
                }}
              >
                <MenuItem classes={{ root: 'quests-modal__menu-item' }} value={10}>
                  Ten
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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

import React from 'react';
import Button from '@mui/material/Button';

// import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import StyledQuest, {
  QuestButton,
  QuestDescription,
  QuestLog2,
  QuestText,
  QuestTitile,
  QuestParticipants,
  StyledPrize,
} from './StyledQuest';
import questDesignEl1 from '../../assets/svg/quest.svg';
import questDesignEl2 from '../../assets/svg/quest2.svg';
import questDelete from '../../assets/png/trash.png';
import questEdit from '../../assets/png/edit.png';
import coinImg from '../../assets/png/coinIcon.png';
import finishQuest from '../../assets/png/finishTask.png';

// import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

interface QuestProps {
  questName: string;
  questDescription: string;
  questParticipants: number;
  coinsWon?: number;
  questFocus: string;
  children: React.ReactElement;
  onDelete?: Function;
  onEdit?: Function;
  onFinish?: Function;
  awardItem?: {
    title: string;
    imgSrc: string;
  };
  isParticipantOfQuest: boolean;
  toggleUserStatusOfQuest: (isParticipating: boolean) => void;
}

const Quest = ({
  coinsWon,
  children,
  questName,
  questDescription,
  questFocus,
  questParticipants,
  awardItem,
  onFinish = () => console.log('test'),
  onDelete = () => console.log('test'),
  onEdit = () => console.log('test'),
  isParticipantOfQuest,
  toggleUserStatusOfQuest,
}: QuestProps) => (
  <StyledQuest>
    <div>
      <QuestParticipants>{questParticipants} Participants</QuestParticipants>
      <Button
        size='small'
        type='button'
        className='join-quest'
        variant='contained'
        onClick={() => toggleUserStatusOfQuest(isParticipantOfQuest)}
      >
        {isParticipantOfQuest ? 'Join' : 'Cancel'}
      </Button>
      <img src={questDesignEl1} />
      <QuestTitile>{questName}</QuestTitile>
      <QuestDescription>{questDescription}</QuestDescription>
    </div>

    <div className='coins'>
      {!!coinsWon && (
        <>
          <img src={coinImg} />
          <div>{coinsWon}</div>
        </>
      )}
    </div>
    {children}
    <QuestLog2 src={questDesignEl2} />
    <QuestText>
      {questFocus}
      <div className='buttonContainter'>
        <QuestButton onClick={() => onDelete()}>
          <img src={questDelete} />
        </QuestButton>
        <QuestButton onClick={() => onEdit()}>
          <img src={questEdit} />
        </QuestButton>
      </div>
    </QuestText>
    <StyledPrize>
      {awardItem && (
        <>
          <img width='76.78px' height='75.88px' src={awardItem.imgSrc} alt='' />
          {awardItem.title}
        </>
      )}
    </StyledPrize>
    <div className='questCheck'>
      <img src={finishQuest} onClick={() => onFinish()} />
    </div>
  </StyledQuest>
);

export default Quest;

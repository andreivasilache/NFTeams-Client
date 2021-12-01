import React, { useState } from 'react';
import WithModal from '../../../HOCs/WithModal/WithModal';
import CustomCheckbox from '../../CustomCheckbox/CustomCheckbox';
import CustomSquareButton from '../../CustomSquareButton/CustomSquareButton';
import { StyledSetWinnersOfQuest } from './StyledSetWinnersOfQuest';

interface Props {
  isModalOpen: boolean;
  onCloseModal: () => void;
  currentQuest: any;
  onQuestEnd: (winners: string[]) => void;
}

const SetWinnersOfQuest = ({ isModalOpen = false, onCloseModal, currentQuest, onQuestEnd }: Props) => {
  const [selectedUsersEmails, setSelectedUsersEmails] = useState<string[]>([]);

  return (
    <WithModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} modalType='action'>
      <StyledSetWinnersOfQuest onClick={e => e.stopPropagation()}>
        <div className='quests-modal__title'>Quest winners</div>
        <div className='quests-modal__label'>Set winners of {currentQuest?.title} quest.</div>
        <div className='quests-modal__participants'>
          {(currentQuest?.participants || []).map((participant: string) => (
            <CustomCheckbox
              key={participant}
              isChecked={selectedUsersEmails.includes(participant)}
              label={participant}
              onToggle={() =>
                setSelectedUsersEmails(
                  selectedUsersEmails.includes(participant)
                    ? selectedUsersEmails.filter(user => user !== participant)
                    : [...selectedUsersEmails, participant],
                )
              }
            />
          ))}
        </div>
        <div className='quests-modal__actions'>
          <CustomSquareButton text='End Quest' handleClick={() => onQuestEnd(selectedUsersEmails)} width='107px' isWithTopRight />
        </div>
      </StyledSetWinnersOfQuest>
    </WithModal>
  );
};

export default SetWinnersOfQuest;

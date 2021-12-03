import React from 'react';
import WithModal from '../../../HOCs/WithModal/WithModal';
// import { ReactComponent as ModalContentCross } from '../../../assets/svg/modal-cross.svg';
import StyledBadgeInfo from './StyledBadgeInfo';

interface Props {
  selectedItem: any;
  positionRef: any;
  handleCloseModal: () => void;
}

const BadgeInfo = ({ selectedItem, positionRef, handleCloseModal }: Props) => {
  const refCoords = positionRef?.getBoundingClientRect();
  const top = (refCoords?.top || 0) - 600;
  const left = (refCoords?.left || 0) + 280;

  return (
    <WithModal isModalOpen={!!selectedItem} onCloseModal={handleCloseModal} top={top} left={left} modalType='info'>
      <StyledBadgeInfo>
        <div className='modal__title'>{selectedItem?.metadata?.name}</div>
        <div className='modal__container'>
          <div className='modal__content'>
            <img className='modal__image' src={selectedItem?.imageURL} alt='modal__badge-image' />
            <div className='modal__badge-info'>5% have this trait</div>
          </div>
        </div>
      </StyledBadgeInfo>
    </WithModal>
  );
};

export default BadgeInfo;

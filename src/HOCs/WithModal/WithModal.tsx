import React from 'react';
import StyledWithModal from './StyledWithModal';
import infoModal from '../../assets/svg/modalBackground.svg';
import actionModal from '../../assets/svg/actionsModal.svg';

export type modalTypes = 'info' | 'action';

interface Props {
  children: any;
  isModalOpen: boolean;
  top?: number;
  left?: number;
  onCloseModal: () => void;
  modalType: modalTypes;
}

const WithModal = ({ children, isModalOpen = false, top = 0, left = 0, onCloseModal, modalType }: Props) =>
  isModalOpen ? (
    // @ts-ignore
    <StyledWithModal image={modalType === 'info' ? infoModal : actionModal} onClick={onCloseModal} top={top} left={left} type={modalType}>
      <div className={`modal-container ${modalType === 'info' ? 'modal-container--info' : 'modal-container--actions'}`}>{children}</div>
    </StyledWithModal>
  ) : null;

export default WithModal;

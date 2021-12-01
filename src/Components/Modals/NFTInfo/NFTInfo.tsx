import React from 'react';
import WithModal from '../../../HOCs/WithModal/WithModal';
import StyledNFTInfo from './StyledNFTInfo';
import { ReactComponent as ModalContentCross } from '../../../assets/svg/modal-cross.svg';
import ghostIcon from '../../../assets/svg/ghost.svg';
import goldCrown from '../../../assets/svg/gold-crown.svg';
import silverSword from '../../../assets/svg/silver-sword.svg';
import jewels from '../../../assets/svg/jewels.svg';

interface Props {
  selectedItem: any;
  positionRef: any;
  handleCloseModal: () => void;
}

const nftInfos = [
  {
    percentHave: 5,
    imgSrc: ghostIcon,
  },
  {
    percentHave: 8,
    imgSrc: goldCrown,
  },
  {
    percentHave: 12,
    imgSrc: silverSword,
  },
  {
    percentHave: 15,
    imgSrc: jewels,
  },
];

const NFTInfo = ({ selectedItem, positionRef, handleCloseModal }: Props) => {
  const refCoords = positionRef?.getBoundingClientRect();
  const top = (refCoords?.top || 0) + (refCoords?.height / 2 || 0);

  return (
    <WithModal isModalOpen={!!selectedItem} onCloseModal={handleCloseModal} top={top} left={refCoords?.left || 0} modalType='info'>
      <StyledNFTInfo>
        <div className='modal__title'>{selectedItem?.metadata?.name}</div>
        <div className='modal__container'>
          <div className='modal__received-info'>Received at BIM 2021</div>
          <div className='modal__content'>
            {nftInfos.map(nftInfo => (
              <div className='modal__content-item' key={nftInfo.imgSrc}>
                <img src={nftInfo.imgSrc} />
                <span className='modal__content-item-info'>{`${nftInfo.percentHave}% have this trait`}</span>
              </div>
            ))}
          </div>
          <ModalContentCross className='modal__cross' />
        </div>
      </StyledNFTInfo>
    </WithModal>
  );
};

export default NFTInfo;

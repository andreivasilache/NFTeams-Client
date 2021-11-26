import React from 'react';
import ClickAwayListener from '@mui/core/ClickAwayListener';
import StyledConfirmAsset from './StyledConfirmAsset';
import { ReactComponent as ConfirmAssetBackground } from '../../assets/svg/asset-modal-background.svg';

interface Props {
  item: any;
  handleClickAway: () => void;
}

const ConfirmAsset = ({ item, handleClickAway }: Props) => (
  <ClickAwayListener onClickAway={handleClickAway}>
    <StyledConfirmAsset>
      <ConfirmAssetBackground />
      <span className='confirm-asset__name'>{item.metadata.name}</span>
      <img className='confirm-asset__image' src={`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`} />
    </StyledConfirmAsset>
  </ClickAwayListener>
);

export default ConfirmAsset;

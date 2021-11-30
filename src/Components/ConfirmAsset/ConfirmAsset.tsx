import React from 'react';
import ClickAwayListener from '@mui/core/ClickAwayListener';
import StyledConfirmAsset from './StyledConfirmAsset';
import { ReactComponent as ConfirmAssetBackground } from '../../assets/svg/asset-modal-background.svg';

interface Props {
  // item: any;
  handleClickAway: () => void;
  children: any;
}

const ConfirmAsset = ({ handleClickAway, children }: Props) => (
  <ClickAwayListener onClickAway={handleClickAway}>
    <StyledConfirmAsset>
      <ConfirmAssetBackground />
      {children}
    </StyledConfirmAsset>
  </ClickAwayListener>
);

export default ConfirmAsset;

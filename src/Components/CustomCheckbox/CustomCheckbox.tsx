import React from 'react';

import StyledCustomCheckbox from './StyledCustomCheckbox';

interface Props {
  isChecked: boolean;
  label: string;
  onToggle: () => void;
}

const CustomCheckbox = ({ label = 'test', isChecked = false, onToggle }: Props) => (
  <StyledCustomCheckbox>
    <label className={`checkbox ${isChecked ? 'checkbox-checked' : ''}`}>
      {label}
      <input type='checkbox' checked={isChecked} onChange={onToggle} />
      <span className='checkmark' />
    </label>
  </StyledCustomCheckbox>
);

export default CustomCheckbox;

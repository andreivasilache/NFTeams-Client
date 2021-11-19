import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CustomInput from '../../CustomImput/CustomInput';
import CustomSquareButton from '../../CustomSquareButton/CustomSquareButton';
import StyledUsers from './StyledUsers';

const createStyles = makeStyles({
  formControl: {
    color: '#FFFFFF',
    padding: '0',
    marginTop: '0 !important',
    marginBottom: '0 !important',
  },
  checkbox: {
    border: '1px solid #929BC9',
  },
});

const Users = () => {
  const classes = createStyles();
  return (
    <StyledUsers>
      <CustomInput />
      <div className='users__list'>
        <FormGroup>
          <FormControlLabel
            classes={{ root: classes.formControl }}
            control={<Checkbox size='small' classes={{ root: classes.checkbox }} />}
            label='Label'
          />
          <FormControlLabel classes={{ root: classes.formControl }} control={<Checkbox size='small' />} label='Disabled' />
        </FormGroup>
      </div>
      <div className='users__action'>
        <CustomSquareButton handleClick={() => {}} text='Assign to user' />
      </div>
    </StyledUsers>
  );
};

export default Users;

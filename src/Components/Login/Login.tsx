import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import StyledLogin, { StyledPassword } from './StyleLogin';
import { AuthFields, WhiteTextField } from '../../Pages/Auth/StyledAuth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      alert(err.code);
    }
  };

  return (
    <StyledLogin>
      <AuthFields>
        <WhiteTextField
          type='email'
          required
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='standard'
        />
        <WhiteTextField
          type='password'
          required
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={e => setPassword(e.target.value)}
          value={password}
          label='Password'
          variant='standard'
        />
      </AuthFields>
      <StyledPassword>
        <FormControlLabel className='checkbox-section' control={<Checkbox />} label='Remember me' />
        <Button variant='text'>Fogot your password ?</Button>
      </StyledPassword>
      <Button type='button' className='login-button' variant='contained' onClick={() => loginWithEmailAndPassword(email, password)}>
        login
      </Button>
    </StyledLogin>
  );
};

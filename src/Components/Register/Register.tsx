import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { AuthFields, WhiteTextField } from '../../Pages/Auth/StyledAuth';
import StyleRegister from './StyleRegister';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setCPassword] = useState('');

  const auth = getAuth();
  const registerWithEmailAndPassword = async (email: string, password: string) => {
    if (password !== confirmedPassword) {
      alert('Passwords are not matching');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.reload();
    } catch (err: any) {
      alert(err.code);
    }
  };

  return (
    <StyleRegister>
      <AuthFields>
        <WhiteTextField
          required
          type='email'
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='standard'
        />
        <WhiteTextField
          required
          type='password'
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={e => setPassword(e.target.value)}
          value={password}
          label='Password'
          variant='standard'
        />
        <WhiteTextField
          required
          type='password'
          InputLabelProps={{ style: { color: '#fff' } }}
          onChange={e => setCPassword(e.target.value)}
          value={confirmedPassword}
          label='Confirm Password'
          variant='standard'
        />
      </AuthFields>
      <Button className='register-button' variant='contained' onClick={() => registerWithEmailAndPassword(email, password)}>
        register
      </Button>
    </StyleRegister>
  );
};

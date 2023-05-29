import React from 'react'
import './login.styles.scss'
import { useState } from 'react';
import FormInput from '../form-input/FormInput';


import {
    signinWithGooglePopup,
    CreateUserFromAuth,
    signInAuthUserWithEmailAndPassword,
  } from '../../utils/firebase/firebase-utils';

  const defaultLoginInformation = {
    email: '',
    password: '',
  };

const LoginForm = () => {
    const [loginInformation, setLoginInformation] = useState(defaultLoginInformation);
    const { email, password } = loginInformation;

  const resetLoginInformation = () => {
    setLoginInformation(defaultLoginInformation);
  };

  const signInWithGoogle = async () => {
    const response = await signinWithGooglePopup();
    await CreateUserFromAuth(response.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetLoginInformation();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginInformation({ ...loginInformation, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
          required: true, 
          onChange: handleChange,
          name:'email',
          value: email
          }}
          
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password
          }}
        />
        <div className='buttons-container'>
          <button type='submit'>Sign In</button>
          <button type='button' onClick={signInWithGoogle}>
            Google sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm
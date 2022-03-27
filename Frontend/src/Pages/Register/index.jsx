import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './RegisterElements';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/authSlice';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser, isError, message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    // Redirect when logged in
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  const { username, email, password, password2 } = formData;

  const [error, setError] = useState('');

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError('password not match');
      return;
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <Container>
      <Box
        sx={{ bgcolor: 'background.default' }}
        className=' p-4 sm:w-2/5 w-3/4'
      >
        <div className=' text-2xl font-light'>CREATE AN ACCOUNT</div>
        {isError && <p>{message}</p>}
        <form className='flex flex-wrap' onSubmit={onSubmit}>
          <Input
            type='text'
            name='username'
            placeholder='username'
            required
            onChange={onChange}
          />
          <Input
            type='email'
            name='email'
            placeholder='email'
            required
            onChange={onChange}
          />
          <Input
            type='password'
            name='password'
            placeholder='password'
            required
            onChange={onChange}
          />
          <Input
            onChange={onChange}
            type='password'
            name='password2'
            placeholder='confirm password'
            required
          />
          {error && <Typography color='error'>{error}</Typography>}
          <div className='agreement text-xs my-4'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <Button
            variant='contained'
            fullWidth
            type='BtnSubmit'
            className=' rounded-none shadow-none py-3.5 px-4'
          >
            CREATE
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Register;

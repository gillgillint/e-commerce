import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../Register/RegisterElements';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../Redux/auth/authSlice';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const { isLoading, isError, currentUser } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }

    dispatch(reset());
  }, [dispatch, currentUser, navigate]);

  return (
    <Container>
      <Box
        sx={{ bgcolor: 'background.default' }}
        className=' p-4 sm:w-2/5 w-3/4'
      >
        <div className=' text-2xl font-light'>SIGN IN</div>
        <form className='flex flex-wrap flex-col'>
          <Input
            name='username'
            type='text'
            placeholder='username'
            onChange={onChange}
          />
          <Input
            name='password'
            type='password'
            placeholder='password'
            onChange={onChange}
          />

          {isError && (
            <Typography className='mt-2' color='error'>
              Something went wrong...
            </Typography>
          )}
          <Button
            disabled={isLoading}
            onClick={onSubmit}
            type='submitBtn'
            variant='contained'
            fullWidth
            className=' rounded-none shadow-none my-5 py-3.5 px-4'
          >
            Login
          </Button>
          <Link className='my-1 text-xs underline' to='/'>
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link className='my-1 text-xs underline' to='/register'>
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </Box>
    </Container>
  );
}

export default Login;

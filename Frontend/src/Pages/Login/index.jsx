import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Register/RegisterElements';

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
  return (
    <Container>
      <Box sx={{ bgcolor: 'background.default' }} className=' p-4 sm:w-2/5 w-3/4'>
        <div className=' text-2xl font-light'>SIGN IN</div>
        <form className='flex flex-wrap flex-col'>
          <Input type='text' placeholder='username' />
          <Input type='text' placeholder='password' />

          <Button
            variant='contained'
            fullWidth
            className=' rounded-none shadow-none my-5 py-3.5 px-4'
          >
            Login
          </Button>
          <Link className='my-1 text-xs underline' to='/'>
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link className='my-1 text-xs underline' to='/'>
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </Box>
    </Container>
  );
}

export default Login;

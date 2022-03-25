import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react';
import { Input } from './RegisterElements';

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
  return (
    <Container>
      <Box
        sx={{ bgcolor: 'background.default' }}
        className=' p-4 sm:w-2/5 w-3/4'
      >
        <div className=' text-2xl font-light'>CREATE AN ACCOUNT</div>
        <form className='flex flex-wrap'>
          <Input type='text' placeholder='name' />
          <Input type='text' placeholder='last name' />
          <Input type='text' placeholder='username' />
          <Input type='text' placeholder='email' />
          <Input type='text' placeholder='password' />
          <Input type='text' placeholder='confirm password' />
          <div className='agreement text-xs my-4'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <Button
            variant='contained'
            fullWidth
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

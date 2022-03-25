import styled from '@emotion/styled';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: start;
`;

function Footer() {
  return (
    <div className='flex sm:flex-row flex-col p-4'>
      <div className='flex-1 flex flex-col '>
        <Typography component='h1' variant='h4' >
          e-commerce
        </Typography>
        <p className='mb-4 mt-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente nam
          illum tenetur soluta earum doloremque tempore pariatur distinctio rem,
          tempora, perspiciatis deserunt odit
        </p>
        <div className='flex'>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Pinterest />
          </IconButton>
        </div>
      </div>
      <div className='flex-1 p-4 sm:block hidden'>
        <h3 className='font-bold mb-7.5 mt-2'>Useful Links</h3>

        <ul className='p-0 m-0 flex flex-wrap'>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </ul>
      </div>
      <div className='flex-1'>
        <h3 className='font-bold mb-7.5 mt-4'>Contact</h3>
        <ContactItem className=''>
          <Room className='mr-2.5' />
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem className=''>
          <Phone className='mr-2.5' />
          +1 234 56 78
        </ContactItem>
        <ContactItem className=''>
          <MailOutline className='mr-2.5' />
          kantapong.int.work@gmail.com
        </ContactItem>

        <img
          className='w-1/2'
          src='https://i.ibb.co/Qfvn4z6/payment.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Footer;

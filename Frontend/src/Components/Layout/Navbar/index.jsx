import React from 'react';
import { AppBar, Toolbar, Badge } from '@mui/material';
import NavbarSearch from './NavbarSearch';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

function Navbar() {
  const theme = useTheme();
  return (
    <AppBar
      className='shadow-none relative'
      sx={{
        bgcolor: 'common.white',
        color: 'grey.700',
        [theme.breakpoints.down('sm')]: {
          height: '50',
        },
      }}
    >
      <Toolbar
        sx={{
          [theme.breakpoints.down('sm')]: {
            py: '10',
          },
        }}
      >
        <div className='flex-1 flex items-center'>
          <div className='hidden sm:block text-sm cursor-pointer'>EN.</div>
          <NavbarSearch />
        </div>

        <div className='flex-1 hidden sm:block'>
          <h1 className='text-base font-bold  sm:text-xl text-center'>E-commerce</h1>
        </div>

        <div className='flex-1 flex items-center justify-center sm:justify-end gap-4'>
          <div className='text-xs sm:text-sm cursor-pointer'>REGISTER</div>
          <div className='text-xs sm:text-sm cursor-pointer'>SIGN IN</div>
          <div className='text-xs sm:text-sm cursor-pointer'>
            <Badge badgeContent={4} color='secondary'>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

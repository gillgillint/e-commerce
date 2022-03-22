import React from 'react';
import { AppBar, Toolbar, Badge } from '@mui/material';
import NavbarSearch from './NavbarSearch';
import { ShoppingCartOutlined } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar className='shadow-none relative' sx={{bgcolor:'common.white' ,color:'grey.700'}}>
      <Toolbar>
        <div className='flex-1 flex items-center'>
          <div className='text-sm cursor-pointer'>EN.</div>
          <NavbarSearch />
        </div>

        <div className='flex-1'>
          <h1 className='font-bold text-xl text-center'>E-commerce</h1>
        </div>

        <div className='flex-1 flex items-center justify-end gap-4'>
          <div className='text-sm cursor-pointer'>REGISTER</div>
          <div className='text-sm cursor-pointer'>SIGN IN</div>
          <div className='text-sm cursor-pointer'>
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

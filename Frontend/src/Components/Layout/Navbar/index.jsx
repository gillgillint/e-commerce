import React from 'react';
import { AppBar, Toolbar, Badge } from '@mui/material';
import NavbarSearch from './NavbarSearch';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/auth/authSlice';

function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quantity } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
          <Link to='/'>
            <h1 className='text-base font-bold  sm:text-xl text-center'>
              E-commerce
            </h1>
          </Link>
        </div>

        <div className='flex-1 flex items-center  justify-end gap-4'>
          {currentUser ? (
            <div
              onClick={onLogout}
              className='text-xs sm:text-sm cursor-pointer'
            >
              LOGOUT
            </div>
          ) : (
            <>
              <Link to='/register'>
                <div className='text-xs sm:text-sm cursor-pointer'>
                  REGISTER
                </div>
              </Link>
              <Link to='/login'>
                <div className='text-xs sm:text-sm cursor-pointer'>SIGN IN</div>
              </Link>
            </>
          )}

          <div className='text-xs sm:text-sm cursor-pointer'>
            <Link to='/cart'>
              <Badge badgeContent={quantity} color='secondary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

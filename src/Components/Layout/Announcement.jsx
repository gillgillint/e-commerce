import { Box, Container, Toolbar } from '@mui/material';
import React from 'react';

function Announcement() {
  return (
    <Box
      className='h-7.5 flex justify-center items-center'
      sx={{ color: 'common.white', bgcolor: 'teal' }}
    >
      Super Deal! Free Shipping on Orders Over $50
    </Box>
  );
}

export default Announcement;

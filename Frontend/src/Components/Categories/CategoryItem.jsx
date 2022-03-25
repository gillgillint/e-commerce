import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function CategoryItem({ item }) {
  return (
    <Box sx={{ height: `${70}vh` }} className='flex-1 m-0.5 relative'>
      <img
        src={item.img}
        alt='category'
        className='w-full h-2/5 sm:h-full object-cover '
      />
      <div className='absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center'>
        <Typography className='mb-3' color='white' variant='h4'>
          {item.title}
        </Typography>
        <Button
          color='common'
          sx={{ bgcolor: 'background.default', color: 'text.secondary' }}
          variant='contained'
          className='border-none rounded-none  shadow-none p-2.5'
        >
          SHOW NOW
        </Button>
      </div>
    </Box>
  );
}

export default CategoryItem;

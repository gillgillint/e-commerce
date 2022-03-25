import { Send } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/material';

function Newsletter() {
  return (
    <Box
      sx={{ height: '60vh', bgcolor: 'grey.A100' }}
      className='flex items-center justify-center flex-col'
    >
      <Typography component='h4' variant='h4' className='text-5xl sm:text-7xl mb-4 '>
        Newsletter
      </Typography>
      <div className='text-2xl font-light mb-4 text-center'>
        Get timely updates from your favorite products.
      </div>
      <div className='w-4/5 sm:w-1/2 bg-white flex justify-between '>
        <input
          type='email'
          placeholder='Your email'
          className='border-none flex-1 sm:pl-4 pl-0'
        />

        <Button variant='text' className='basis-1/12' color='primary'>
          <Send />
        </Button>
      </div>
    </Box>
  );
}

export default Newsletter;

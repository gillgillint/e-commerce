import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import Newsletter from '../../Components/Newsletter';
import Products from '../../Components/Products';
import { CustomSelect } from './ProductListPageElements';

function Product() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Typography variant='h4' className='m-4'>
        Dresses
      </Typography>

      <div className=' flex sm:flex-row flex-col justify-between'>
        <div className=' m-4 '>
          <Typography className='mr-0 sm:mr-4 ' component='span' variant='h6'>
            Filter Product:
          </Typography>
          <CustomSelect>
            <option selected disabled>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </CustomSelect>
          <CustomSelect>
            <option selected disabled>
              size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </CustomSelect>
        </div>
        <div className=' m-4'>
          <Typography className='mr-0 sm:mr-4 ' component='span' variant='h6'>
            Sort Product:
          </Typography>

          <CustomSelect>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>PRice (desc)</option>
          </CustomSelect>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;

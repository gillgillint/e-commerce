import styled from '@emotion/styled';
import { Add, Remove } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import Newsletter from '../../Components/Newsletter';
import { FilterColor, Image } from './ProductDetailElements';

function ProductDetail() {
  return (
    <div>
      <Navbar />
      <Announcement />

      <div className='  sm:p-12.5 flex sm:flex-row flex-col'>
        <div className='imgContainer flex-1'>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='product-img' />
        </div>

        <div className='infoContainer flex-1 sm:px-12.5 p-2.5'>
          <Typography variant='h4' className='font-extralight'>
            Denim Jumpsuit
          </Typography>
          <p className='my-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            libero blanditiis deserunt doloribus aliquid suscipit quibusdam
            laudantium optio amet, cupiditate vitae. Commodi dolorum atque
            quisquam harum itaque quis et dignissimos!
          </p>
          <span className='font-thin text-4xl'>$ 20</span>
          <div className='flex justify-between sm:w-1/2 w-full my-7.5 '>
            <div className='flex items-center '>
              <span className='text-xl font-thin'>Color</span>
              <div className='flex '>
                <FilterColor color='black' />
                <FilterColor color='darkblue' />
                <FilterColor color='gray' />
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-xl font-thin'>Size</span>
              <select className='ml-2.5'>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className='flex items-center sm:w-1/2 w-full justify-between'>
            <div className='flex items-center font-bold'>
              <IconButton>
                <Remove />
              </IconButton>
              <span className='w-7.5 h-7.5 rounded-lg border flex items-center justify-center mx-1.5'>
                1
              </span>
              <IconButton>
                <Add />
              </IconButton>
            </div>
            <Button variant='outlined'>ADD TO CART</Button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductDetail;

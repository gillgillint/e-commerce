import { MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import Newsletter from '../../Components/Newsletter';
import Products from '../../Components/Products';
import { CustomSelect } from './ProductListPageElements';

function Product() {
  const { category } = useParams();

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Typography variant='h4' className='m-4'>
        {category}
      </Typography>

      <div className=' flex sm:flex-row flex-col justify-between'>
        <div className=' m-4 '>
          <Typography className='mr-0 sm:mr-4 ' component='span' variant='h6'>
            Filter Product:
          </Typography>
          <CustomSelect onChange={handleFilters} name='color'>
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Navy</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Grey</option>
            <option>Pink</option>
          </CustomSelect>
          <CustomSelect onChange={handleFilters} name='size'>
            <option disabled>size</option>
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

          <CustomSelect onChange={(e) => setSort(e.target.value)}>
            <option value='newest'>Newest</option>
            <option value='asc'>Price (asc)</option>
            <option value='desc'>Price (desc)</option>
          </CustomSelect>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;

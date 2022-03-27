import styled from '@emotion/styled';
import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  .info {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  &:hover .info {
    opacity: 1;
  }
`;

const IconStyles = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: ' white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px',
  transition: 'all 0.5s ease',
  '&:hover': {
    backgroundColor: '#e9f5f5',
    transform: 'scale(1.1)',
  },
};

function ProductItem({ item }) {
  return (
    <Container>
      <img src={item.img} alt='product' className='h-3/4 z-10' />

      <div className='info z-20'>
        <IconButton sx={IconStyles}>
          <ShoppingCartOutlined />
        </IconButton>
        <Link to={`/product/${item._id}`}>
          <IconButton sx={IconStyles}>
            <SearchOutlined />
          </IconButton>
        </Link>
        <IconButton sx={IconStyles}>
          <FavoriteBorder />
        </IconButton>
      </div>
    </Container>
  );
}

export default ProductItem;

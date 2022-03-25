import { Add,  Remove } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React from 'react';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import {Details, Hr, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle} from './CartElements'

function Cart() {
  return (
    <div>
      <Navbar />
      <Announcement />

      <div className='wrapper sm:p-4 p-2.5'>
        <Typography variant='h4' className='font-light text-center'>
          Your Bag
        </Typography>
        <div className='top flex items-center justify-between p-4'>
          <Button
            variant='outlined'
            className='p-2.5 font-semibold rounded-none '
          >
            CONTINUE SHOPPING
          </Button>
          <div className='sm:flex hidden'>
            <div className='underline cursor-pointer mx-2.5'>
              Shopping Bag(2)
            </div>
            <div className='underline cursor-pointer mx-2.5'>
              Your Wishlist (0)
            </div>
          </div>
          <Button
            variant='contained'
            sx={{ bgcolor: 'grey.900' }}
            className='p-2.5 border-2 font-semibold shadow-none rounded-none'
          >
            CHECKOUT NOW
          </Button>
        </div>
        <div className='flex justify-between sm:flex-row flex-col'>
          <Info >
            <Product>
              <ProductDetail>
                <img className='w-48' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <img className='w-48' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='gray' />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary className='summary flex-1'>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
           <Button
            variant='contained'
            sx={{ bgcolor: 'grey.900' }}
            className='p-2.5 border-2 font-semibold shadow-none rounded-none'
            fullWidth
          >
              CHECKOUT NOW
          </Button>
          </Summary>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

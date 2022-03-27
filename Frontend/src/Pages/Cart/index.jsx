import { Add, Remove } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import {
  Details,
  Hr,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
} from './CartElements';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../requestMethod';
import { useNavigate, Navigate } from 'react-router-dom';
import { reset } from '../../Redux/cartSlice';

const KEY = process.env.REACT_APP_STRIPE;

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('checkout/payment', {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate('/success', {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

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
            onClick={() => navigate('/')}
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
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <img className='w-48' src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <span className='w-7.5 h-7.5 rounded-lg border flex items-center justify-center mx-1.5'>
                      <ProductAmount>{product.quantity}</ProductAmount>
                    </span>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary className='summary flex-1'>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            {currentUser ? (
              <>
                <StripeCheckout
                  name='e-commerce Shop'
                  image='https://avatars.githubusercontent.com/u/1486366?v=4'
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <Button
                    variant='contained'
                    sx={{ bgcolor: 'grey.900' }}
                    className='p-2.5 border-2 font-semibold shadow-none rounded-none'
                    fullWidth
                  >
                    CHECKOUT NOW
                  </Button>
                </StripeCheckout>
              </>
            ) : (
              <Navigate to='/login' />
            )}
          </Summary>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

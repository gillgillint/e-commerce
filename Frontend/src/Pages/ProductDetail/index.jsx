import { Add, Remove } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Announcement from '../../Components/Announcement';
import Footer from '../../Components/Layout/Footer';
import Navbar from '../../Components/Layout/Navbar';
import Newsletter from '../../Components/Newsletter';
import { FilterColor, Image } from './ProductDetailElements';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartSlice';
import { publicRequest } from '../../requestMethod';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id, product]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div>
      <Navbar />
      <Announcement />

      <div className='  sm:p-12.5 flex sm:flex-row flex-col'>
        <div className='imgContainer flex-1'>
          <Image src={product.img} alt='product-img' />
        </div>

        <div className='infoContainer flex-1 sm:px-12.5 p-2.5'>
          <Typography variant='h4' className='font-extralight'>
            {product.title}
          </Typography>
          <p className='my-4'>{product.desc}</p>
          <span className='font-thin text-4xl'>$ 20</span>
          <div className='flex justify-between sm:w-1/2 w-full my-7.5 '>
            <div className='flex items-center '>
              <span className='text-xl font-thin'>Color</span>
              <div className='flex '>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-xl font-thin'>Size</span>
              <select
                className='ml-2.5'
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex items-center sm:w-1/2 w-full justify-between'>
            <div className='flex items-center font-bold'>
              <IconButton onClick={() => handleQuantity('dec')}>
                <Remove />
              </IconButton>
              <span className='w-7.5 h-7.5 rounded-lg border flex items-center justify-center mx-1.5'>
                {quantity}
              </span>
              <IconButton onClick={() => handleQuantity('inc')}>
                <Add />
              </IconButton>
            </div>
            <Button onClick={addToCart} variant='outlined'>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductDetail;

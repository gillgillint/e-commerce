import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { reset } from '../Redux/cartSlice';
import { userRequest } from '../requestMethod';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [orderId, setOrderId] = useState(null);

  const backToHome = () => {
    dispatch(reset());
    navigate('/');
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick={backToHome} style={{ padding: 10, marginTop: 20 }}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;

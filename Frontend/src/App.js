import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import ProductList from './Pages/ProductList';
import Success from './Pages/Success';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

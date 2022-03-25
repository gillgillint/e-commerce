import { ThemeProvider } from '@emotion/react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';
import Product from './Pages/ProductList';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { theme } from './theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Cart/>  
      </ThemeProvider>
    </>
  );
}

export default App;

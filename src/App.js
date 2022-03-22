import { ThemeProvider } from '@emotion/react';
import Home from './Pages/Home';
import { theme } from './Theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

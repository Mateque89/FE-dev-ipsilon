import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Search from '../Search/Search';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';
import Summary from '../Summary/Summary';
import Charts from '../Charts/Charts';
import Footer from '../Footer/Footer';


const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
  },
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Summary />
        <Search />
        <Charts />
        <Footer />
      </ThemeProvider >
    </Provider>
  );
}

export default App;

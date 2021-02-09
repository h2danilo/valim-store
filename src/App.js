import React from 'react';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

// import Header from './components/Header';
import SideBar from './components/SideBar';
import Routes from './routes';
import GlobalStyle from './styles/global';

// eslint-disable-next-line no-unused-vars
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <BrowserRouter> */}
        {/* <Header /> */}
        <SideBar />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;

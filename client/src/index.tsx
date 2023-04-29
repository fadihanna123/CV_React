import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from 'styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/app';
import './styles';
import ReactDom from 'react-dom/client';
import App from 'containers/App';

const el = document.getElementById('root') as HTMLDivElement;
const root = ReactDom.createRoot(el);

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>
);

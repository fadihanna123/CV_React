import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from 'styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/app';
import './styles';
import ReactDom from 'react-dom/client';

// Components
import { App } from 'containers';

const { NODE_ENV, REACT_APP_PUBLIC_API_KEY, REACT_APP_PUBLIC_AUTHORIZATION } =
  process.env;
const el = document.getElementById('root') as HTMLDivElement;
const root = ReactDom.createRoot(el);

if (NODE_ENV === 'production') {
  console.log = () => {};
  console.warn = () => {};
}

if (!REACT_APP_PUBLIC_API_KEY || !REACT_APP_PUBLIC_AUTHORIZATION) {
  throw new Error('Missing keys? Add them and restart the app.');
}

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

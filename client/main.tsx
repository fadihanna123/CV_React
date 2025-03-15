import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '@styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './src/redux/app';
import './src/styles';
import ReactDom from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import App from '@containers/App';
import { apiKey, mode } from '@core/utils';

const el = document.getElementById('root') as HTMLDivElement;
const root = ReactDom.createRoot(el);

if (mode === 'production') {
  console.log = () => {};
  console.warn = () => {};
}

if (!apiKey) {
  throw new Error('Missing keys? Add them and restart the app.');
}

const queryClient = new QueryClient();

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </>
);

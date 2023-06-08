import axios from 'axios';
import Footer from 'inc/Footer';
import Header from 'inc/Header';
import { Container } from 'styles';
import { apiKey, authorizationKey, backendURL } from 'utils/envs';
import React from 'react';

const globalHeader: string = 'application/json';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['Content-Type'] = globalHeader;
axios.defaults.headers.common.apiKey = apiKey;
axios.defaults.headers.common.authorization = authorizationKey;

const App: React.FC = () => (
  <Container>
    <Header />
    <Footer />
  </Container>
);

export default App;

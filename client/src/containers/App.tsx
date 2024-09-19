import { Container } from 'styles';
import React, { useEffect } from 'react';

// Components
import Header from 'inc/Header';
import Footer from 'inc/Footer';
import { setLoading, setMenu } from '../redux/reducers';
import { getMenu } from 'functions';
import { CSSProperties } from 'styled-components';
import { useQuery } from 'react-query';
import { PacmanLoader } from 'react-spinners';
import useReduxConsts from 'hooks/useReduxConsts';

const App: React.FC = () => {
  const { dispatch } = useReduxConsts();
  const { isLoading, data: menuData } = useQuery('repoData', getMenu);

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setMenu(menuData));
      dispatch(setLoading(false));
    }
  }, []);

  const override: CSSProperties = {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
  };

  return (
    <Container>
      {isLoading ? (
        <PacmanLoader
          loading={isLoading}
          aria-label='Loading Spinner'
          data-testid='loader'
          cssOverride={override}
          size={50}
        />
      ) : (
        <>
          <Header />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default App;

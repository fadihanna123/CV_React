import { Container } from 'styles';
import React from 'react';

// Components
import { Header, Footer } from 'inc';
import { useAppDispatch } from '../redux/app';
import { setLoading, setMenu } from '../redux/reducers';
import { getMenu } from 'functions';
import { CSSProperties } from 'styled-components';
import { useQuery } from 'react-query';
import { PacmanLoader } from 'react-spinners';

const App: React.FC = () => {
  const { isLoading, data: menuData } = useQuery('repoData', getMenu);

  const dispatch = useAppDispatch();

  if (isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
    dispatch(setMenu(menuData));
  }

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

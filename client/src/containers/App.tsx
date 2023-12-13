import { Container } from 'styles';
import React from 'react';

// Components
import { Header, Footer } from 'inc';
import { useAppDispatch } from 'redux/app';
import { setLoading, setMenu } from 'redux/reducers';
import ClipLoader from 'react-spinners/ClipLoader';
import { getMenu } from 'functions';
import { CSSProperties } from 'styled-components';
import { useQuery } from 'react-query';

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
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <Container>
      {isLoading ? (
        <ClipLoader
          loading={isLoading}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
          cssOverride={override}
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

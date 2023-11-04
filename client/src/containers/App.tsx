import { Container } from 'styles';
import React, { useEffect } from 'react';

// Components
import { Header, Footer } from 'inc';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getLoading, setLoading, setMenu } from 'redux/reducers';
import ClipLoader from 'react-spinners/ClipLoader';
import { getMenu } from 'functions';
import { CSSProperties } from 'styled-components';

const App: React.FC = () => {
  const loading = useAppSelector(getLoading);

  const dispatch = useAppDispatch();

  const getMenuData = async () => {
    const menuData = await getMenu();
    dispatch(setMenu(menuData));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getMenuData();
    dispatch(setLoading(false));
  }, []);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <Container>
      {loading ? (
        <ClipLoader
          loading={loading}
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

import { CSSProperties } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';
import React, { FC, useEffect } from 'react';

// Components
import { Container } from '@styles/index';
import Header from '@inc/Header';
import Footer from '@inc/Footer';
import { setLoading, setMenu } from '@redux/reducers';
import { getMenu } from '@functions/index';
import useReduxConsts from '@hooks/useReduxConsts';

const App: FC = () => {
  const { dispatch } = useReduxConsts();
  const { isPending, data: menuData } = useQuery({
    queryKey: ['repoData'],
    queryFn: getMenu,
  });

  useEffect(() => {
    if (isPending) {
      dispatch(setLoading(true));
    } else {
      dispatch(setMenu(menuData));
      dispatch(setLoading(false));
    }
  }, [menuData]);

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
      {isPending ? (
        <PacmanLoader
          loading={isPending}
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

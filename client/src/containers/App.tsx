import { FC, useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';

// Components
import { Container } from '@styles/index';
import Header from '@inc/Header';
import Footer from '@inc/Footer';
import { setLoading, setMenu } from '@redux/reducers';
import { errorHandler, getMenu } from '@functions/index';
import useReduxConsts from '@hooks/useReduxConsts';

const App: FC = () => {
  const [isMobile] = useState(window.innerWidth < 1020);

  const { dispatch } = useReduxConsts();
  const {
    isPending,
    data: menuData,
    error,
  } = useQuery({
    queryKey: ['repoData'],
    queryFn: getMenu,
    retry: 2,
  });

  useEffect(() => {
    if (error) {
      // Handle error appropriately
      errorHandler(`Failed to fetch menu ${error}`);
    }
  }, [error]);

  useEffect(() => {
    if (isPending) {
      dispatch(setLoading(true));
    } else {
      dispatch(setMenu(menuData));
      dispatch(setLoading(false));
    }
  }, [menuData, isPending, dispatch]);

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
          size={isMobile ? 30 : 50}
          className='loader'
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

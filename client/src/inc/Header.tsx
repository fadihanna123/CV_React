import Logo from 'assets/logo.jpg';
import { MenuItem } from 'components/MenuItem';
import { getMenu } from 'functions';
import { Menu, MenuReducerTypes } from 'models';
import Contact from 'pages/Contact';
import Projects from 'pages/Projects';
import Start from 'pages/Start';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { setLoading, setMenu } from 'redux/actions';
import { MainHeader, MainMenu } from 'ui';

const Header: React.FC = () => {
  const menu = useSelector(
    (state: MenuReducerTypes) => state.menuReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    getMenu()
      .then(({ data }: { data: Menu[] }) => {
        if (isMounted) {
          dispatch(setLoading(true));
          dispatch(setMenu(data));
        } else {
          return null;
        }
      })
      .catch((err) => {
        toast.error((err as Error).message, { transition: Flip });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <MainHeader>
        <MainMenu>
          {menu.map((item: Menu, i: number) => (
            <Fragment key={item.id}>
              {i === 0 && (
                <Link to={item.pathroute}>
                  <img src={Logo} alt='Logotypen' />
                </Link>
              )}
              <MenuItem item={item} />
            </Fragment>
          ))}
        </MainMenu>
      </MainHeader>
      <main>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
      <ToastContainer />
    </>
  );
};

export default Header;

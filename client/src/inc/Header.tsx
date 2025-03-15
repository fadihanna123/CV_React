import Logo from '@assets/logo.jpg';
import Contact from '@containers/Contact';
import MenuItem from '@containers/MenuItem';
import React, { Fragment } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainHeader from '@ui/MainHeader';
import MainMenu from '@ui/MainMenu';
import Start from '@components/Home';
import Projects from '@components/Projects';
import useReduxConsts from '@hooks/useReduxConsts';

const Header: React.FC = () => {
  const { menu } = useReduxConsts();

  return (
    <>
      <MainHeader>
        <MainMenu>
          {menu.map((menuItem: Menu, i: number) => (
            <Fragment key={menuItem.id}>
              {i === 0 && (
                <Link to={menuItem.pathroute}>
                  <img src={Logo} alt='Logotypen' />
                </Link>
              )}

              <MenuItem item={menuItem} />
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

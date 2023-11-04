import Logo from 'assets/logo.jpg';
import { Contact, MenuItem } from 'containers';
import React, { Fragment } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MainHeader, MainMenu } from 'ui';
import { Start, Projects } from 'components';
import { useAppSelector } from 'redux/app';
import { getMenuState } from 'redux/reducers';

const Header: React.FC = () => {
  const menu = useAppSelector(getMenuState);

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

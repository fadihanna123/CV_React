import React from 'react';
import { Navbar } from 'styles';
import PropTypes from 'prop-types';

const MainMenu: React.FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

MainMenu.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainMenu;

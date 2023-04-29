import { MenuProps } from 'models';
import React from 'react';
import { Navbar } from 'styles';
import PropTypes from 'prop-types';

export const MainMenu: React.FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

MainMenu.propTypes = {
  children: PropTypes.any.isRequired,
};

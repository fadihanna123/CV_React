import React from 'react';
import { Navbar } from 'styles';

const MainMenu: React.FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

export default MainMenu;

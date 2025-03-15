import React from 'react';

// Components
import { Navbar } from '@styles/index';

const MainMenu: React.FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

export default MainMenu;

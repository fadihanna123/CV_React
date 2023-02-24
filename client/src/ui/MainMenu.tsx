import { MenuProps } from 'models';
import React from 'react';
import { Navbar } from 'styles';

export const MainMenu: React.FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

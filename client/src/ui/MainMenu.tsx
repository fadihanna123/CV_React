import { FC } from 'react';

// Components
import { Navbar } from '@styles/index';

const MainMenu: FC<MenuProps> = ({ children }: MenuProps) => (
  <Navbar>{children}</Navbar>
);

export default MainMenu;

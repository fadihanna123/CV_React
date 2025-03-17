import { FC } from 'react';

const MainHeader: FC<MainHeaderProps> = ({ children }: MainHeaderProps) => (
  <header>{children}</header>
);

export default MainHeader;

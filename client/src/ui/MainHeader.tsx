import React from 'react';

const MainHeader: React.FC<MainHeaderProps> = ({
  children,
}: MainHeaderProps) => <header>{children}</header>;

export default MainHeader;

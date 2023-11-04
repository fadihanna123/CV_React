import React from 'react';
import PropTypes from 'prop-types';

const MainHeader: React.FC<MainHeaderProps> = ({
  children,
}: MainHeaderProps) => <header>{children}</header>;

MainHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainHeader;

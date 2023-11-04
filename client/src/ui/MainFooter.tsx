import React from 'react';
import { FooterBlock } from 'styles/footerStyles';
import PropTypes from 'prop-types';

const MainFooter: React.FC<MainFooterProps> = ({
  children,
}: MainFooterProps) => <FooterBlock>{children}</FooterBlock>;

MainFooter.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainFooter;

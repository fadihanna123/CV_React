import React from 'react';

// Components
import { FooterBlock } from '@styles/footerStyles';

const MainFooter: React.FC<MainFooterProps> = ({
  children,
}: MainFooterProps) => <FooterBlock>{children}</FooterBlock>;

export default MainFooter;

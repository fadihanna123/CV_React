import { FC } from 'react';

// Components
import { FooterBlock } from '@styles/footerStyles';

const MainFooter: FC<MainFooterProps> = ({ children }: MainFooterProps) => (
  <FooterBlock>{children}</FooterBlock>
);

export default MainFooter;

import { MainFooterProps } from "models";
import React from "react";
import { FooterBlock } from "styles/footerStyles";

export const MainFooter: React.FC<MainFooterProps> = ({
    children,
}: MainFooterProps) => <FooterBlock>{children}</FooterBlock>;

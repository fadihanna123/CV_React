import { MainHeaderProps } from "models";
import React from "react";

export const MainHeader: React.FC<MainHeaderProps> = ({
    children,
}: MainHeaderProps) => <header>{children}</header>;

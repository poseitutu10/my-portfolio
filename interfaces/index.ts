import React from "react";

export interface NavLinkProps {
  name: string;
  route: string;
}

export interface ButtonProps {
  name: string;
  styles: string;
  action?: () => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface DecoIconsProps extends ChildrenProps {
  route: string
}
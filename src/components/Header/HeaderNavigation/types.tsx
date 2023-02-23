import { ReactNode } from 'react';

export interface NavItemInterface {
  icon: ReactNode;
  description: JSX.Element;
  link: string;
}
export interface NavProps {
  item: NavItemInterface;
}

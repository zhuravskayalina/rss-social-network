import { ReactNode, useId } from 'react';

export interface NavItemInterface {
  icon: ReactNode;
  description: JSX.Element;
  link: string;
  key: string;
}
export interface NavProps {
  item: NavItemInterface;
}

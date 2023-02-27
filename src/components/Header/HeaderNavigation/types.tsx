import { ReactNode } from 'react';

export interface NavItemInterface {
  icon: ReactNode;
  description: JSX.Element;
  link: string;
  sublink: string;
  key: string;
}

export interface NavProps {
  item: NavItemInterface;
  userId: string;
}

export interface UserNavProps {
  userId: string;
}

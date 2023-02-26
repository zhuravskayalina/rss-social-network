import { MouseEventHandler } from 'react';
import { User } from '../../../types/interfaces';

export interface ChatsListProps {
  user: User;
  handleClickChat: MouseEventHandler;
}

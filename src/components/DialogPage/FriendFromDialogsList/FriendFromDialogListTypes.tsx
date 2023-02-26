import { MouseEventHandler } from 'react';
import { Chat } from '../../../types/interfaces';

export interface FriendFromDialogListProps {
  myChat: Chat;
  styleClass: string;
  handleClickChat: ((choiceChat: Chat) => void):MouseEventHandler<Element>;
}

import { Chat } from '../../../types/interfaces';

export interface FriendFromDialogListProps {
  chat: Chat;
  handleClickChat: (choiceChat: Chat) => void;
  userId: string;
}

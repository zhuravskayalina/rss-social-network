import { Chat, User } from '../../../types/interfaces';

export interface ChatsListProps {
  user: User;
  handleClickChat: (choiceChat: Chat) => void;
  userId: string;
  emptyChat: Chat | object;
}

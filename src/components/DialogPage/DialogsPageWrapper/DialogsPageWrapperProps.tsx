import { Chat, User } from '../../../types/interfaces';

export interface DialogPageProps {
  user: User;
  emptyChat: Chat | Record<string, never>;
}

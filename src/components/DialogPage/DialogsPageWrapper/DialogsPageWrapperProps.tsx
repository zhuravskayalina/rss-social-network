import { Chat, User } from '../../../types/interfaces';

export interface DialogPageProps {
  user: User;
  chat: Chat;
  setChat: React.Dispatch<React.SetStateAction<Chat>>;
}

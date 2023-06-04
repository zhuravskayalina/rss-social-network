import { Chat, ChatHistory } from '../../../types/interfaces';

export interface ChatProps {
  dialog: Chat;
  messages: ChatHistory[];
}

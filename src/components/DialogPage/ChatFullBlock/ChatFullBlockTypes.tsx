import { ChangeEvent } from 'react';
import { Chat, ChatHistory } from '../../../types/interfaces';

export interface ChatFullBlockProps {
  value: string;
  dialog: Chat;
  messages: Array<ChatHistory>;
  handleSendClick: () => void;
  handleMessageInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickChat: (choiceChat: Chat) => void;
  userId: string;
}

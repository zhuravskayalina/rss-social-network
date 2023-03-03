import { ChangeEvent, KeyboardEvent } from 'react';
import { Chat, ChatHistory } from '../../../types/interfaces';

export interface ChatFullBlockProps {
  value: string;
  chat: Chat;
  messages: Array<ChatHistory>;
  handleSendClick: () => void;
  handleMessageInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
}

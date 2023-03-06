import { ChangeEvent, KeyboardEvent } from 'react';

export interface MessageTextAreaProps {
  value: string;
  handleSendClick: () => void;
  handleMessageInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
}

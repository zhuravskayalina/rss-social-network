import { useEffect, useRef } from 'react';
import { ChatsListProps } from './ChatsListTypes';
import { Chat } from '../../../types/interfaces';
import FriendFromDialogsList from '../FriendFromDialogsList/FriendFromDialogsList';

const ChatsList = ({ user: { chat }, handleClickChat, userId }: ChatsListProps) => {
  const chatRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  });
  return (
    <ul className='dialog__chats-wrapper' ref={chatRef}>
      {chat.map((chatItem: Chat) => (
        <FriendFromDialogsList
          key={`chat_${chatItem.senderId}`}
          chat={chatItem}
          handleClickChat={handleClickChat}
          userId={userId}
        />
      ))}
    </ul>
  );
};

export default ChatsList;

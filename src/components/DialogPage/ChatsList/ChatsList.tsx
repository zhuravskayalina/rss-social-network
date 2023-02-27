import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { ChatsListProps } from './ChatsListTypes';
import { Chat } from '../../../types/interfaces';
import FriendFromDialogsList from '../FriendFromDialogsList/FriendFromDialogsList';
import styles from './ChatsList.module.scss';

const cx = classNames.bind(styles);

const ChatsList = ({ user: { chat }, handleClickChat, userId }: ChatsListProps) => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  });

  return (
    <div className='dialog__chats-wrapper' ref={chatRef}>
      {chat.map((dialog: Chat) => (
        <FriendFromDialogsList
          key={`chat_${dialog.senderId}`}
          myChat={dialog}
          styleClass={cx('list')}
          handleClickChat={handleClickChat}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default ChatsList;

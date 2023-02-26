import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { io, Socket } from 'socket.io-client';
import classNames from 'classnames/bind';
import styles from './DialogsPageWrapper.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import ChatFullBlock from '../ChatFullBlock/ChatFullBlock';
import { DialogPageProps } from './DialogsPageWrapperProps';
import { Chat, User } from '../../../types/interfaces';

interface ChatMessageInterface {
  text: string;
  time: string;
  isOwnMessage: boolean;
}

const cx = classNames.bind(styles);

const DialogPageWrapper = ({ user }: DialogPageProps) => {
  const webs = useRef<Socket | null>(null);
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<Array<User>>([]);
  const [chat, setChat] = useState(user.chat[0]);
  const [messages, setMessages] = useState<Array<ChatMessageInterface>>(chat.history);

  const handleClickChat = (choiceChat: Chat) => {
    setChat(choiceChat);
    setMessages(choiceChat.history);
  };

  const handleMessageInput = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    if (inputValue) {
      setValue(inputValue);
    }
  };

  const handleSendClick = () => {
    if (webs.current) {
      const message = {
        text: value,
        userId: user.id,
        to: chat.senderId,
        isOwnMessage: true,
      };

      webs.current.emit('chatMessage', message);
      setValue('');
      // setMessages((prevMessages) => [...prevMessages, messageData]);
    }
  };

  useEffect(() => {
    const socket = io('http://localhost:6969');
    socket.auth = { userId: user.id };
    socket.on('users', (connectedUsers: Array<User>) => {
      setUsers([...connectedUsers]);
    });
    socket.on('message', (message: ChatMessageInterface) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    webs.current = socket;
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className={cx('dialog__page')}>
      <ChatsList user={user} handleClickChat={handleClickChat} />
      <ChatFullBlock
        value={value}
        dialog={chat}
        messages={messages}
        handleSendClick={handleSendClick}
        handleMessageInput={handleMessageInput}
        handleClickChat={handleClickChat}
      />
    </div>
  );
};

export default DialogPageWrapper;

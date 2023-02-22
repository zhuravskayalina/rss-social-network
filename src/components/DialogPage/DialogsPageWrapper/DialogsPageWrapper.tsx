import { useState, useEffect, useRef, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import { io, Socket } from 'socket.io-client';
import styles from './DialogsPageWrapper.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import ChatFullBlock from '../ChatFullBlock/ChatFullBlock';
import { DialogPageProps } from './DialogsPageWrapperProps';
import { User } from '../../../types/interfaces';

interface ChatMessageInterface {
  text: string;
  time: string;
  isOwnMessage: boolean;
}

const cx = classNames.bind(styles);

const DialogPageWrapper = ({ user }: DialogPageProps) => {
  const chat = user.chat[0];
  const webs = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<Array<ChatMessageInterface>>([]);
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<Array<User>>([]);

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
        to: 3,
        isOwnMessage: true,
      };
      webs.current.emit('chatMessage', message);
      setValue('');
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
      <ChatsList user={user} />
      <ChatFullBlock
        value={value}
        dialog={chat}
        handleSendClick={handleSendClick}
        handleMessageInput={handleMessageInput}
      />
    </div>
  );
};

// todo передать в инпут handleMessageInput,в кнопку handleSendClick;

export default DialogPageWrapper;

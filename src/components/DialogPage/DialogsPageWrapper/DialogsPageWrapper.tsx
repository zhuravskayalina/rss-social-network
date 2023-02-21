import { useState, useEffect, useRef, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import { io, Socket } from 'socket.io-client';
import styles from './DialogsPageWrapper.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import ChatFullBlock from '../ChatFullBlock/ChatFullBlock';
import { DialogPageProps } from './DialogsPageWrapperProps';

const cx = classNames.bind(styles);

const DialogPageWrapper = ({ user }: DialogPageProps) => {
  const chat = user.chat[0];
  const webs = useRef<Socket | null>(null);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<Array<any>>([]);

  const handleMessageInput = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    if (inputValue && webs.current) {
      const message = {
        text: inputValue,
        userId: user.id,
        to: users.find((connectedUser) => connectedUser.userId === 2).userSocketId,
      };

      webs.current.emit('chatMessage');
      setValue(inputValue);
    }
  };

  const handleSendClick = () => {
    if (webs.current !== null) {
      webs.current.emit('chatMesssage', value);
      setValue('');
    }
  };

  console.log(users);
  useEffect(() => {
    const socket = io('http://localhost:6969');
    socket.auth = { userId: user.id };
    socket.on('users', (connectedUsers: Array<any>) => {
      setUsers([connectedUsers]);
    });

    webs.current = socket;
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className={cx('dialog__page')}>
      <ChatsList user={user} />
      <ChatFullBlock dialog={chat} />
    </div>
  );
};

// todo передать в инпут handleMessageInput,в кнопку handleSendClick;

export default DialogPageWrapper;

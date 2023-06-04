import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import classNames from 'classnames/bind';
import styles from './DialogsPageWrapper.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import ChatFullBlock from '../ChatFullBlock/ChatFullBlock';
import { DialogPageProps } from './DialogsPageWrapperProps';
import { Chat, HotKeys, User } from '../../../types/interfaces';

interface ChatMessageInterface {
  text: string;
  time: string;
  isOwnMessage: boolean;
}

const cx = classNames.bind(styles);

const DialogPageWrapper = ({ user }: DialogPageProps) => {
  const url = `/profile/${user.id}/friends`;
  if (!user.chat[0]) {
    return (
      <div className={cx('dialog', 'dialog__empty')}>
        <p className={cx('dialog__empty-message')}>
          <FormattedMessage id='noChats' />
        </p>
        <Link to={url}>
          <button className={cx('dialog__page-goToFriendsBtn')} type='button'>
            <FormattedMessage id='goToFriendsPage' />
          </button>
        </Link>
      </div>
    );
  }
  const webs = useRef<Socket | null>(null);
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<Array<User>>([]);
  const [chat, setChat] = useState(user.chat[0]);
  const [messages, setMessages] = useState<Array<ChatMessageInterface>>(user.chat[0].history);

  const handleClickChat = (choiceChat: Chat) => {
    setChat(choiceChat);
    setMessages(choiceChat.history);
  };

  const handleMessageInput = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = ev.target;
    setValue(inputValue);
  };

  const handleSendClick = () => {
    if (!!value.trim() && webs.current) {
      const message = {
        text: value,
        userId: user.id,
        to: chat.senderId,
        isOwnMessage: true,
      };
      const date = new Date();
      const hour = date.getHours();
      const fullHourMorning = hour <= 9 ? `0${hour}` : `${hour}`;
      const fullHourEvening = hour <= 19 ? `0${hour - 12}` : `${hour - 12}`;
      const minutes = date.getMinutes();
      const fullMinutes = minutes <= 9 ? `0${minutes}` : `${minutes}`;
      const isMorning = date.getHours() < 12;

      const localTime = isMorning
        ? `${fullHourMorning}:${fullMinutes} AM`
        : `${fullHourEvening}:${fullMinutes} PM`;

      webs.current.emit('chatMessage', message);

      const localMessage = {
        text: value,
        time: localTime,
        isOwnMessage: true,
      };
      setMessages((prevMessages) => [...prevMessages, localMessage]);
      setValue('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const keyCodsMap: HotKeys = {
      Enter: handleSendClick,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    keyCodsMap[event.key] && keyCodsMap[event.key]();
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
    <div className={cx('dialog', 'dialog__page')}>
      <ChatsList user={user} handleClickChat={handleClickChat} userId={user.id} />
      <ChatFullBlock
        value={value}
        chat={chat}
        messages={messages}
        handleSendClick={handleSendClick}
        handleMessageInput={handleMessageInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default DialogPageWrapper;

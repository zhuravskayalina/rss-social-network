import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { ChatProps } from './ChatTypes';
import styles from './Chat.module.scss';
import Message from '../Message/Message';

const cx = classNames.bind(styles);
const Chat = ({ dialog: { senderId, senderInfo }, messages }: ChatProps) => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  });

  return (
    <div className={cx('dialog__chat')} ref={chatRef}>
      {messages.map((message) => (
        <Message
          key={`message-${senderId}-${message.time}`}
          message={message}
          senderAvatar={senderInfo.profilePhoto}
        />
      ))}
    </div>
  );
};

export default Chat;

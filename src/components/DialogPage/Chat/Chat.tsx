import classNames from 'classnames/bind';
import { ChatProps } from './ChatTypes';
import styles from './Chat.module.scss';
import Message from '../Message/Message';

const cx = classNames.bind(styles);

const Chat = ({ dialog: { senderId, senderInfo, history } }: ChatProps) => (
  <div className={cx('dialog__chat')}>
    {history.map((message) => (
      <Message
        key={`message-${senderId}-${message.time}`}
        message={message}
        senderAvatar={senderInfo.profilePhoto}
      />
    ))}
  </div>
);

export default Chat;

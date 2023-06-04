import classNames from 'classnames/bind';
import styles from './ChatFullBlock.module.scss';
import { ChatFullBlockProps } from './ChatFullBlockTypes';
import Chat from '../Chat/Chat';
import MessageTextArea from '../MessageTextArea/MessageTextArea';
import UserInfo from '../UserInfoBlock/UserInfoBlock';

const cx = classNames.bind(styles);

const ChatFullBlock = ({
  value,
  chat,
  messages,
  handleSendClick,
  handleMessageInput,
  handleKeyDown,
}: ChatFullBlockProps) => {
  return (
    <div className={cx('dialog__chat-block')}>
      <UserInfo sender={chat.senderInfo} senderId={chat.senderId} key={chat.senderId} />
      <Chat dialog={chat} messages={messages} />
      <MessageTextArea
        value={value}
        handleSendClick={handleSendClick}
        handleMessageInput={handleMessageInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default ChatFullBlock;

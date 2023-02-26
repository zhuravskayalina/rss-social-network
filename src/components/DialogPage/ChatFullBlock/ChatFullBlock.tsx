import classNames from 'classnames/bind';
import styles from './ChatFullBlock.module.scss';
import { ChatFullBlockProps } from './ChatFullBlockTypes';
import FriendFromDialogList from '../FriendFromDialogsList/FriendFromDialogsList';
import Chat from '../Chat/Chat';
import MessageTextArea from '../MessageTextArea/MessageTextArea';

const cx = classNames.bind(styles);

const ChatFullBlock = ({
  value,
  dialog,
  messages,
  handleSendClick,
  handleMessageInput,
  handleClickChat,
  userId,
}: ChatFullBlockProps) => {
  return (
    <div className={cx('dialog__chat-block')}>
      <FriendFromDialogList
        myChat={dialog}
        styleClass='chat'
        handleClickChat={handleClickChat}
        userId={userId}
      />
      <Chat dialog={dialog} messages={messages} />
      <MessageTextArea
        value={value}
        handleSendClick={handleSendClick}
        handleMessageInput={handleMessageInput}
      />
    </div>
  );
};
export default ChatFullBlock;

import classNames from 'classnames/bind';
import styles from './ChatFullBlock.module.scss';
import { ChatFullBlockProps } from './ChatFullBlockTypes';
import FriendFromDialogList from '../FriendFromDialogsList/FriendFromDialogsList';
import Chat from '../Chat/Chat';
import MessageTextArea from '../MessageTextArea/MessageTextArea';

const cx = classNames.bind(styles);

const ChatFullBlock = ({ dialog }: ChatFullBlockProps) => {
  return (
    <div className={cx('dialog__chat-block')}>
      <FriendFromDialogList myChat={dialog} styleClass='chat' />
      <Chat dialog={dialog} />
      <MessageTextArea />
    </div>
  );
};
export default ChatFullBlock;

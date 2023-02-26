import classNames from 'classnames/bind';
import { ChatsListProps } from './ChatsListTypes';
import { Chat } from '../../../types/interfaces';
import FriendFromDialogsList from '../FriendFromDialogsList/FriendFromDialogsList';
import styles from '../Chat/Chat.module.scss';

const cx = classNames.bind(styles);

const ChatsList = ({ user: { chat }, handleClickChat }: ChatsListProps) => {
  return (
    <div className='dialog__chats-wrapper'>
      {chat.map((dialog: Chat) => (
        <FriendFromDialogsList
          key={`chat_${dialog.senderId}`}
          myChat={dialog}
          styleClass={cx('list')}
          handleClickChat={handleClickChat}
        />
      ))}
    </div>
  );
};

export default ChatsList;

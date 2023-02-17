import { ChatsListProps } from './ChatsListTypes';
import { Chat } from '../../../types/interfaces';
import FriendFromDialogsList from '../FriendFromDialogsList/FriendFromDialogsList';

const ChatsList = ({ user: { chat } }: ChatsListProps) => {
  return (
    <div className='dialog__chats-wrapper'>
      {chat.map((dialog: Chat) => (
        <FriendFromDialogsList
          key={`chat_${dialog.senderId}`}
          myChat={dialog}
          styleClass={'list'}
        />
      ))}
    </div>
  );
};

export default ChatsList;

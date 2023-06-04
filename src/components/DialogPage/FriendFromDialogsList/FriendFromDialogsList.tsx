import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FriendFromDialogsList.module.scss';
import { FriendFromDialogListProps } from './FriendFromDialogListTypes';

const cx = classNames.bind(styles);

const FriendFromDialogList = ({ chat, handleClickChat, userId }: FriendFromDialogListProps) => {
  const url = `/messages/${userId}`;

  return (
    <li className={cx('dialog__list-item')}>
      <NavLink
        to={url}
        end
        className={({ isActive }) => cx('chat-user-link', 'dialog__friend', { active: isActive })}
        onClick={() => handleClickChat(chat)}
      >
        <div className={cx('dialog__image')}>
          <div className={cx('dialog__img-box')}>
            <img
              className={cx('dialog__img')}
              src={chat.senderInfo.profilePhoto}
              alt='My friend`s avatar'
            />
          </div>
        </div>
        <p
          className={cx('dialog__friend-name')}
        >{`${chat.senderInfo.name} ${chat.senderInfo.surname}`}</p>
      </NavLink>
    </li>
  );
};
export default FriendFromDialogList;

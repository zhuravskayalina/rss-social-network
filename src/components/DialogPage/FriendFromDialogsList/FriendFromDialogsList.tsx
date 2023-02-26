import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FriendFromDialogsList.module.scss';
import { FriendFromDialogListProps } from './FriendFromDialogListTypes';
import noAvatarImg from '../../../assets/images/user-avatar.png';

const cx = classNames.bind(styles);

const FriendFromDialogList = ({
  myChat,
  styleClass,
  handleClickChat,
}: FriendFromDialogListProps) => {
  const url = '/messages';
  return (
    <NavLink to={url}>
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <div
        className={cx('dialog__friend', `${styleClass}`)}
        role='button'
        onClick={() => handleClickChat(myChat)}
      >
        <div className={cx('dialog__image', `${styleClass}`)}>
          <div className={cx('dialog__img-box')}>
            <img
              className={cx('dialog__img', `${styleClass}`)}
              src={myChat.senderInfo.profilePhoto || noAvatarImg}
              alt='My friend`s avatar'
            />
          </div>
        </div>
        <p
          className={cx('dialog__friend-name', `${styleClass}`)}
        >{`${myChat.senderInfo.name} ${myChat.senderInfo.surname}`}</p>
      </div>
    </NavLink>
  );
};
export default FriendFromDialogList;

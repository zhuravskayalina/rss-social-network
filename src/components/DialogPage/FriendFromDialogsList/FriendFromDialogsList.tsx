import classNames from 'classnames/bind';
import styles from './FriendFromDialogsList.module.scss';
import { FriendFromDialogListProps } from './FriendFromDialogListTypes';
import noAvatarImg from '../../../assets/images/user-avatar.png';

const cx = classNames.bind(styles);

const FriendFromDialogList = ({
  myChat: { senderInfo },
  styleClass,
}: FriendFromDialogListProps) => (
  <div className={cx('dialog__friend', `${styleClass}`)}>
    <div className={cx('dialog__image', `${styleClass}`)}>
      <div className={cx('dialog__img-box')}>
        <img
          className={cx('dialog__img', `${styleClass}`)}
          src={senderInfo.profilePhoto || noAvatarImg}
          alt='My friend`s avatar'
        />
      </div>
    </div>

    <p
      className={cx('dialog__friend-name', `${styleClass}`)}
    >{`${senderInfo.name} ${senderInfo.surname}`}</p>
  </div>
);

export default FriendFromDialogList;

import classNames from 'classnames/bind';
import styles from './FriendFromDialogsList.module.scss';
import { FriendFromDialogListProps } from './FriendFromDialogListTypes';
import noAvatarImg from '../../../assets/images/user-avatar.png';

const cx = classNames.bind(styles);

const FriendFromDialogList = ({
  myChat: { senderInfo },
  styleClass,
}: FriendFromDialogListProps) => {
  return (
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
};

export default FriendFromDialogList;

// import { NavLink } from 'react-router-dom';
// <NavLink
//   to={pathForRouter}
//   className={({ isActive }) => (isActive ? 'dialog__active-link' : '')}
// >
//   <img src={senderInfo.profilePhoto} alt='My friend`s avatar' className='dialog__avatar' />
//   <p className='dialog__friend-name'> {`${senderInfo.name} ${senderInfo.surname}`}</p>
// </NavLink>

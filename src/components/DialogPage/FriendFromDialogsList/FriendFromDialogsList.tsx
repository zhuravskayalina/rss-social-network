import classNames from 'classnames/bind';
import styles from './FriendFromDialogsList.module.scss';
import { FriendFromDialogListProps } from './FriendFromDialogListTypes';

const cx = classNames.bind(styles);

const FriendFromDialogList = ({
  myChat: { senderId, senderInfo },
  styleClass,
}: FriendFromDialogListProps) => {
  const pathForRouter = `dialog/${senderId}`;
  return (
    <div className={cx('dialog__friend', `${styleClass}`)}>
      <img
        src={senderInfo.profilePhoto}
        alt='My friend`s avatar'
        className={cx(`dialog__avatar-${styleClass}`)}
      />
      <p
        className={`dialog__friend-name-${styleClass}`}
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

import classNames from 'classnames/bind';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import DelFriendButton from './DelFriendButton/DelFriendButton';

const cx = classNames.bind(styles);

const Friend = ({ user: { name, surname, location, profilePhoto } }: FriendProps) => {
  return (
    <div className={cx('friend')}>
      <div
        className={cx('friend__photo')}
        style={{ backgroundImage: `url(${profilePhoto})`, backgroundSize: 'cover' }}
      >
        {' '}
      </div>
      <div className={cx('friend__info')}>
        {name} {surname} <br /> {location}
      </div>
      <DelFriendButton />
    </div>
  );
};

export default Friend;

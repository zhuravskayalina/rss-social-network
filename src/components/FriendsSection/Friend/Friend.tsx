import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import DelFriendButton from './DelFriendButton/DelFriendButton';
import avatar from '../../../assets/images/max.jpeg';

const cx = classNames.bind(styles);

const Friend = ({ user: { name, surname, location, profilePhoto } }: FriendProps) => {
  return (
    <div className={cx('friend')}>
      <Link to='/friend-1'>
        <div
          className={cx('friend__photo')}
          style={{
            background: `url(${profilePhoto}) 50%/ cover border-box padding-box`,
            // backdropFilter: 'blur(5px)',
          }}
        >
          {/* <img src={avatar} alt='' /> */}
        </div>
      </Link>
      <div className={cx('friend__info')}>
        <h3>
          {name} {surname}
        </h3>
        <p>{location}</p>
      </div>
      <div className={cx('friend__del')}>
        <div className={cx('friend__del-wrapper')}>
          <DelFriendButton />
        </div>
      </div>
    </div>
  );
};

export default Friend;

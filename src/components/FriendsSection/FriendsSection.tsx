import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './friendss-section.module.scss';
import Friend from './Friend/Friend';
import { User } from '../../types/interfaces';

const cx = classNames.bind(styles);

const FriendsSection = (user: User) => {
  return (
    <div className={cx('main')}>
      <div className={cx('main__friends')}>
        <div className={cx('main__friends-filter')}> </div>
        <Link to='/friend-1'>
          <Friend user={user} />
        </Link>
      </div>
      <div className={cx('main__ads')}> </div>
    </div>
  );
};

export default FriendsSection;

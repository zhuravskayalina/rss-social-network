import classNames from 'classnames/bind';

import styles from './friendss-section.module.scss';
import Friend from './Friend/Friend';
import { FriendSectionProps } from './types';
import ADS from '../../assets/images/div.png';

const cx = classNames.bind(styles);

const FriendsSection = ({ user }: FriendSectionProps) => {
  return (
    <div className={cx('main')}>
      <div className={cx('main__friends')}>
        <div className={cx('main__friends-filter')}>
          <div className={cx('filter')}>
            <span>Order by:</span>
            <select className={cx('filter-select')}>
              <option>name</option>
              <option>location</option>
            </select>
          </div>
        </div>
        <div className={cx('main__friends-wrapper')}>
          <Friend user={user} />
          <Friend user={user} />
          <Friend user={user} />
        </div>
      </div>
      <div className={cx('main__ads')}>
        <img src={ADS} alt='nbvngv' />
      </div>
    </div>
  );
};

export default FriendsSection;

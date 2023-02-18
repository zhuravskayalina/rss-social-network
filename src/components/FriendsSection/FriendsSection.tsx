import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
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
            <span>
              <FormattedMessage id='sort' />
            </span>
            <select className={cx('filter-select')}>
              <option value=''>
                <FormattedMessage id='name' />
              </option>
              <option value=''>
                <FormattedMessage id='surname' />
              </option>
            </select>
          </div>
        </div>
        <div className={cx('main__friends-wrapper')}>
          <Friend user={user} />
          <Friend user={user} />
          <Friend user={user} />
        </div>
      </div>
    </div>
  );
};

export default FriendsSection;

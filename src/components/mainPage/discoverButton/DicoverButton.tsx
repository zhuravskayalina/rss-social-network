import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './discoverButton.module.scss';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { DiscoverButtonProps } from './types';

const cx = classNames.bind(styles);

const DiscoverButton = ({ userId, isLoggedIn, openAuthorization }: DiscoverButtonProps) => {
  return isLoggedIn ? (
    <Link to={`/profile/${userId}`}>
      <button className={cx('discoverButton')}>
        <p className={cx('discoverButton__text')}>
          <FormattedMessage id='discover' />
        </p>
        <div className={cx('discoverButton__arrow')}>
          <Arrow className={cx('discoverButton__arrow-icon')} />
        </div>
      </button>
    </Link>
  ) : (
    <button className={cx('discoverButton')} onClick={openAuthorization}>
      <div className={cx('discoverButton__text')}>Discover Now</div>
      <div className={cx('discoverButton__arrow')}>
        <Arrow className={cx('discoverButton__arrow-icon')} />
      </div>
    </button>
  );
};

export default DiscoverButton;

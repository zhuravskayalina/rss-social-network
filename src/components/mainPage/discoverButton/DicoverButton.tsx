import classNames from 'classnames/bind';
import styles from './discoverButton.module.scss';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

const cx = classNames.bind(styles);

const DiscoverButton = () => {
  return (
    <div role='button' className={cx('discoverButton')}>
      <div className={cx('discoverButton__text')}>Discover Now</div>
      <div className={cx('discoverButton__arrow')}>
        <Arrow />
      </div>
    </div>
  );
};

export default DiscoverButton;

import classNames from 'classnames/bind';

import styles from './discoverButton.module.scss';
import arrow from '../../../assets/icons/arrow.svg';

const cn = classNames.bind(styles);

const DiscoverButton = () => {
  return (
    <div className={cn('discoverButton')}>
      <div className={cn('discoverButton__text')}>Discover Now</div>
      <div className={cn('discoverButton__arrow')}>
        <img src={arrow} alt='Arrow' />
      </div>
    </div>
  );
};

export default DiscoverButton;

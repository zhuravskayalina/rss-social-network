import classNames from 'classnames/bind';
import styles from './advert-section.module.scss';

const cx = classNames.bind(styles);

const AdvertSection = () => {
  return <div className={cx('ad-section')}>Ad section</div>;
};

export default AdvertSection;

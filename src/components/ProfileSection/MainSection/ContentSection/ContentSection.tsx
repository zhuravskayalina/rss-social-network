import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import styles from './content-section.module.scss';

const cx = classNames.bind(styles);

const ContentSection = () => {
  return (
    <div className={cx('content-section')}>
      <Outlet />
    </div>
  );
};

export default ContentSection;

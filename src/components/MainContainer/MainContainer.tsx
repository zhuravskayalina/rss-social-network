import classNames from 'classnames/bind';
import styles from './main-container.module.scss';
import { MainContainerProps } from './types';

const cx = classNames.bind(styles);

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className={cx('main')}>
      <div className={cx('main-container')}>{children}</div>
    </div>
  );
};

export default MainContainer;

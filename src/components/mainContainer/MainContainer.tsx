import classNames from 'classnames/bind';
import styles from './main-container.module.scss';

const cx = classNames.bind(styles);

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className={cx('main')}>
      <div className={cx('main-container')}>{children}</div>
    </div>
  );
};

export default MainContainer;

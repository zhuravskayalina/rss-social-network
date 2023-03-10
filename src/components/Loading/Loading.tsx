import classNames from 'classnames/bind';
import styles from './loading.module.scss';

const cx = classNames.bind(styles);

interface LoadingProps {
  isOnFullScreen: boolean;
}

const Loading = ({ isOnFullScreen }: LoadingProps) => {
  return (
    <div className={cx('loader-container', { 'loader-container_small': !isOnFullScreen })}>
      <div className={cx('loader')}>
        <div className={cx('spinner', 'spinner__yellow')} />
        <div className={cx('spinner', 'spinner__orange')} />
        <div className={cx('spinner', 'spinner__red')} />
        <div className={cx('spinner', 'spinner__pink')} />
        <div className={cx('spinner', 'spinner__violet')} />
        <div className={cx('spinner', 'spinner__mauve')} />
        <div className={cx('spinner', 'spinner__light-yellow')} />
      </div>
    </div>
  );
};

export default Loading;

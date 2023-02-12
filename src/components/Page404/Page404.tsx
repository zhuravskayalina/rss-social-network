import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './page404.module.scss';

const cx = classNames.bind(styles);

const Page404 = () => {
  return (
    <div className={cx('main')}>
      <div className={cx('main__content')}>
        <div className={cx('main__content-logo404')}> </div>
        <p className={cx('main__content-warning')}>OOOPS! THIS PAGE DOES NOT EXIST...</p>
        <Link to='/ '>
          <p className={cx('main__content-homelink')}>GO TO HOME PAGE</p>
        </Link>
      </div>
    </div>
  );
};

export default Page404;

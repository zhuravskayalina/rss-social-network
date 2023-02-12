import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './mainPage.module.scss';
// import mainImg from '../../assets/images/main_img.png';
import DiscoverButton from './discoverButton/DicoverButton';

const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('main')}>
      <div className={cx('main__content')}>
        <h1 className={cx('main__content-title')}>OWL Community</h1>
        <p className={cx('main__content-text')}>
          Having real social contacts can sometimes be difficult FUN, everything becomes much
          simpler!
        </p>
        <p className={cx('main__content-count')}>10,95,219</p>
        <p>Connected People</p>
        <Link to='/'>
          <DiscoverButton />
        </Link>
      </div>
      <div className={cx('main__img')}>{/* <img src={mainImg} alt='People' /> */}</div>
    </div>
  );
};

export default MainPage;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './mainPage.module.scss';
import Header from '../header/header';
import DiscoverButton from './discoverButton/dicoverButton';

const cn = classNames.bind(styles);

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className={cn('main')}>
        <div className={cn('main__content')}>
          <h1 className={cn('main__content-title')}>OWL Community</h1>
          <p className={cn('main__content-text')}>
            Having real social contacts can sometimes be difficult FUN, everything becomes much
            simpler!
          </p>
          <p className={cn('main__content-count')}>10,95,219</p>
          <p>Connected People</p>
          <Link to='/'>
            <DiscoverButton />
          </Link>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default MainPage;

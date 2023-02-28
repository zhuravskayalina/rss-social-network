import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './mainPage.module.scss';
import DiscoverButton from './discoverButton/DicoverButton';
import { DiscoverButtonProps } from './discoverButton/types';

const cx = classNames.bind(styles);

const MainPage = ({ userId, isLoggedIn, openAuthorization }: DiscoverButtonProps) => {
  return (
    <div className={cx('main')}>
      <div className={cx('main__content')}>
        <h1 className={cx('main__content-title')}>OWL Community</h1>
        <div className={cx('main__content-text')}>
          <p>
            <FormattedMessage id='mainDescription1' />
          </p>
          <p>
            <FormattedMessage id='mainDescription2' />
          </p>
          <p>
            <FormattedMessage id='mainDescription3' />
          </p>
        </div>
        <p className={cx('main__content-count')}>10,95,219</p>
        <p>
          <FormattedMessage id='mainMsg2' />
        </p>
        <DiscoverButton
          userId={userId}
          isLoggedIn={isLoggedIn}
          openAuthorization={openAuthorization}
        />
      </div>
      <div className={cx('main__img')} />
    </div>
  );
};

export default MainPage;

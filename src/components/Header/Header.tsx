import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/headerFullLogo.svg';
import LoginButtonHeader from './LoginButton/LoginButton';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';
import { HeaderProps } from './AppTypes';

const cx = classNames.bind(styles);

const Header = ({
  currentLocale,
  handleChange,
  openAuthorization,
  isLoggedIn,
  logOut,
  user,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    if (user) navigate(`profile/${user.id}`);
  };

  return (
    <div className={cx('header')}>
      <button className={cx('header__menu-btn')}>
        <MenuIcon className={cx('header__menu-icon')} />
      </button>
      <div className={cx('header__container')}>
        <Link to='/'>
          <LogoIcon className={cx('header__logo-icon')} />
        </Link>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChange} />
        <Searcher />
        {isLoggedIn && user && (
          <button onClick={handleGoToProfile} className={cx('avatar-btn')}>
            <div className={cx('avatar-box')}>
              <img src={user.profilePhoto || ''} className={cx('avatar')} alt='avatar' />
            </div>
          </button>
        )}
        <LoginButtonHeader
          openAuthorization={openAuthorization}
          isLoggedIn={isLoggedIn}
          logOut={logOut}
        />
      </div>
    </div>
  );
};

export default Header;

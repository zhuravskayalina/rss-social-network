import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/headerFullLogo.svg';
import LoginButtonHeader from './LoginButton/LoginButton';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';
import { HeaderProps } from './AppTypes';
import Navigation from './HeaderNavigation/HeaderNavigation';

const cx = classNames.bind(styles);

const Header = ({
  currentLocale,
  handleChange,
  openAuthorization,
  isLoggedIn,
  logOut,
  user,
}: HeaderProps) => {
  const nodeRef = useRef(null);
  const [notFirsRender, setNotFirsRender] = useState(false);
  const [showNav, setShowNaw] = useState(false);

  const clickMenuHandler = () => {
    setShowNaw(!showNav);
    setNotFirsRender(true);
  };

  const clickNavMenuButtonHandler = () => {
    setShowNaw(!showNav);
    setNotFirsRender(true);
  };

  useEffect(() =>
    document.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.altKey && event.code === 'KeyM') {
        clickMenuHandler();
      }
    }),
  );

  return (
    <div className={cx('header')}>
      <div className={cx('header__logo-block')}>
        {isLoggedIn && (
          <button className={cx('header__menu-btn')} onClick={clickMenuHandler}>
            <MenuIcon className={cx('header__menu-icon')} />
          </button>
        )}

        {user && notFirsRender && (
          <Transition in={showNav} timeout={500} nodeRef={nodeRef}>
            {(state) => (
              <Navigation
                userId={user?.id}
                clickNavMenuButtonHandler={clickNavMenuButtonHandler}
                animationClass={`nav_animation-${state}`}
              />
            )}
          </Transition>
        )}
        <Link to={isLoggedIn ? `/profile/${user?.id}` : '/'}>
          <LogoIcon className={cx('header__logo-icon')} />
        </Link>
      </div>
      <div className={cx('header__controls')}>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChange} />
        <Searcher />
        <div className={cx('login-controls')}>
          {isLoggedIn && user && (
            <Link to={`/profile/${user.id}`} className={cx('avatar-btn')}>
              <div className={cx('avatar-box')}>
                <img src={user.profilePhoto || ''} className={cx('avatar')} alt='avatar' />
              </div>
            </Link>
          )}
          <LoginButtonHeader
            openAuthorization={openAuthorization}
            isLoggedIn={isLoggedIn}
            logOut={logOut}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

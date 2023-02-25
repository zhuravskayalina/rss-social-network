import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/headerFullLogo.svg';
import LoginButtonHeader from './LoginButton/LoginButton';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';
import { ChangeLocalProps } from './AppTypes';
import Navigation from './HeaderNavigation/HeaderNavigation';

const cx = classNames.bind(styles);

const Header = ({ currentLocale, handleChange }: ChangeLocalProps) => {
  const [showNav, setShowNaw] = useState(false);

  const clickMenuHandler = () => {
    setShowNaw(!showNav);
  };

  return (
    <div className={cx('header')}>
      <button className={cx('header__menu-btn')} onClick={clickMenuHandler}>
        <MenuIcon className={cx('header__menu-icon')} />
      </button>
      {showNav && <Navigation />}
      <div className={cx('header__container')}>
        <Link to='/'>
          <LogoIcon className={cx('header__logo-icon')} />
        </Link>
        <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChange} />
        <Searcher />
        <LoginButtonHeader />
      </div>
    </div>
  );
};

export default Header;

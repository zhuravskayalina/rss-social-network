import classNames from 'classnames/bind';
// import { useState } from 'react';
import styles from '../index.scss';
import LoginButton from './loginButton/loginButton';
import menuIcon from '../assets/icons/menu.svg';
import logoIcon from '../assets/icons/headerFullLogo.svg';
import Searcher from './searcher/searcher';
import Switcher from './switcher/switcher';

const classStyles = classNames.bind(styles);

const Header = () => {
  return (
    <div className={classStyles('header')}>
      <img src={menuIcon} alt='Owl' />
      <div>
        <img src={logoIcon} alt='Owl' className={classStyles('header__logo-icon')} />
      </div>
      <span className={classStyles('header__text-language', 'header__empty-space ')}>ENG</span>
      <Switcher />
      <span className={classStyles('header__text-language')}>RU</span>
      <Searcher />
      <LoginButton />
    </div>
  );
};

export default Header;

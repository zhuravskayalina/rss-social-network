import classNames from 'classnames/bind';
// import { useState } from 'react';
import LoginButton from './loginButton/loginButton';
import menuIcon from '../../assets/icons/menu.svg';
import Searcher from './searcher/searcher';
import Switcher from './switcher/switcher';
import styles from './header.module.scss';

const classStyles = classNames.bind(styles);

const Header = () => {
  return (
    <div className={classStyles('header')}>
      <img src={menuIcon} alt='Owl' />
      <a href='src/components/header#!'>
        <div className={classStyles('header__logo-icon')} />
      </a>
      <span className={classStyles('header__text-language', 'header__empty-space')}>ENG</span>
      <Switcher />
      <span className={classStyles('header__text-language')}>RU</span>
      <Searcher />
      <LoginButton />
    </div>
  );
};

export default Header;

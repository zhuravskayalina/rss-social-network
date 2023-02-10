import classNames from 'classnames/bind';

import LoginButton from './LoginButton/LoginButton';
import menuIcon from '../../assets/icons/menu.svg';
import Searcher from './Searcher/Searcher';
import Switcher from './Switcher/Switcher';
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

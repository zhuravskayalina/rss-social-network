import classNames from 'classnames/bind';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import LoginButton from './LoginButton/LoginButton';
// import menuIcon from '../../assets/icons/menu.svg';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';

const classStyles = classNames.bind(styles);

const Header = () => {
  return (
    <div className={classStyles('header')}>
      <MenuIcon />
      <a href='src/components/header#!'>
        <div className={classStyles('header__logo-icon')} />
      </a>
      <SwitcherLanguage />
      <Searcher />
      <LoginButton />
    </div>
  );
};

export default Header;

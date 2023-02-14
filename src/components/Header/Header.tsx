import classNames from 'classnames/bind';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import LoginButtonHeader from './LoginButton/LoginButton';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';
import { ChangeLocalProps } from '../../AppTypes';

const classStyles = classNames.bind(styles);

const Header = ({ currentLocale, handleChange }: ChangeLocalProps) => {
  return (
    <div className={classStyles('header')}>
      <MenuIcon />
      <a href='src/components/header#!'>
        <div className={classStyles('header__logo-icon')} />
      </a>
      <SwitcherLanguage currentLocale={currentLocale} handleChange={handleChange} />
      <Searcher />
      <LoginButtonHeader />
    </div>
  );
};

export default Header;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/headerFullLogo.svg';
import LoginButtonHeader from './LoginButton/LoginButton';
import Searcher from './Searcher/Searcher';
import SwitcherLanguage from './Switcher/SwitcherLanguage/SwitcherForLanguage';
import styles from './header.module.scss';
import { ChangeLocalProps } from './AppTypes';

const cx = classNames.bind(styles);

const Header = ({ currentLocale, handleChange }: ChangeLocalProps) => {
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
        <LoginButtonHeader />
      </div>
    </div>
  );
};

export default Header;

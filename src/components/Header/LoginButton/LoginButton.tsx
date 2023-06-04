import classNames from 'classnames/bind';
import styles from './loginButton.module.scss';
import { LoginButtonProps } from './types';
import { ReactComponent as LoginIcon } from '../../../assets/icons/log-in.svg';

const cx = classNames.bind(styles);

export const LoginButton = ({ openAuthorization, isLoggedIn, logOut }: LoginButtonProps) => {
  return isLoggedIn ? (
    <button className={cx('button', 'button_logout')} onClick={logOut} title='Log out'>
      <LoginIcon className={cx('icon', 'icon_logout')} />
    </button>
  ) : (
    <button className={cx('button', 'button_login')} onClick={openAuthorization} title='Log in'>
      <LoginIcon className={cx('icon', 'icon_login')} />
    </button>
  );
};

export default LoginButton;

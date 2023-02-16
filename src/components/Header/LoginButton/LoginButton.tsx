import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './loginButton.module.scss';
import { LoginButtonProps } from './types';

const cx = classNames.bind(styles);

export const LoginButton = ({ isUser }: LoginButtonProps) => {
  return (
    <Link to={isUser ? 'profile' : ''} className={cx('header__login-button')}>
      <FormattedMessage id='login' />
    </Link>
  );
};

export default LoginButton;

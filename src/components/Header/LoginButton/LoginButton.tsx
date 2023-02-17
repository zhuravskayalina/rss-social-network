import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './loginButton.module.scss';

const cx = classNames.bind(styles);

export const LoginButton = () => {
  return (
    <Link to='profile' className={cx('header__login-button')}>
      <FormattedMessage id='login' />
    </Link>
  );
};

export default LoginButton;

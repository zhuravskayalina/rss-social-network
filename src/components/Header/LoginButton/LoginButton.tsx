import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './loginButton.module.scss';

const cx = classNames.bind(styles);

export const LoginButton = () => {
  return (
    <button type='button' className={cx('header__login-button')}>
      <FormattedMessage id='login' />
    </button>
  );
};

export default LoginButton;

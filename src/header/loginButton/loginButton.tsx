import classNames from 'classnames/bind';
import styles from '../../index.scss';

const classStyles = classNames.bind(styles);

const LoginButton = () => {
  return (
    <button type='button' className={classStyles('header__login-button')}>
      Login
    </button>
  );
};

export default LoginButton;

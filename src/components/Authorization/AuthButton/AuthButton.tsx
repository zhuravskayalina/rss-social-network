import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

interface AuthButtonProps {
  name: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const AuthButton = ({ name, disabled, type }: AuthButtonProps) => {
  return (
    <button className={cx('auth__btn')} type={type} disabled={disabled}>
      <FormattedMessage id={name} />
    </button>
  );
};

export default AuthButton;

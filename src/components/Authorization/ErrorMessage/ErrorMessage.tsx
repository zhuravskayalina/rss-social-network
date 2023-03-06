import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './error.module.scss';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/auth-error.svg';

const cx = classNames.bind(styles);

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <p className={cx('error-message')}>
      <ErrorIcon />
      <span className={cx('text')}>
        <FormattedMessage id={text} />
      </span>
    </p>
  );
};

export default ErrorMessage;

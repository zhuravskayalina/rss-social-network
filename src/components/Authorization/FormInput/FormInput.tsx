import classNames from 'classnames/bind';
import { useIntl } from 'react-intl';
import styles from './form-input.module.scss';

const cx = classNames.bind(styles);

interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const FormInput = ({ name, value, placeholder, type, onChange, onBlur }: FormInputProps) => {
  const intl = useIntl();

  return (
    <input
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={cx('input')}
      type={type}
      placeholder={intl.formatMessage({ id: placeholder })}
    />
  );
};

export default FormInput;

import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './switcher.module.scss';
import { LOCALES } from '../../../../IntlLocale/locales';
import { SwitcherInputProps } from './types';

const cx = classNames.bind(styles);

const SwitcherInput = ({ currentLocale, handleChange }: SwitcherInputProps) => {
  const isRussian = currentLocale === LOCALES.RUSSIAN;

  useEffect(() =>
    document.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.altKey && event.code === 'KeyL') {
        handleChange();
      }
    }),
  );

  return (
    <label htmlFor='language-switcher' className={cx('header__switch-language')}>
      <input
        type='checkbox'
        tabIndex={0}
        id='language-switcher'
        className={cx('header__switch-language-input')}
        onChange={handleChange}
        checked={isRussian}
      />
      <span className={cx('header__switch-language-circle')} />
    </label>
  );
};

export default SwitcherInput;

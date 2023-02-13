import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './switcher.module.scss';
import { LOCALES } from '../../../../IntlLocale/locales';
import { ChangeLocalProps } from '../../../../AppTypes';
import { getInitialLocal } from '../../../../localStorageUtils';

const cx = classNames.bind(styles);

const SwitcherInput = ({ handleChange }: ChangeLocalProps) => {
  const isRussian = getInitialLocal() === LOCALES.RUSSIAN;
  const [checked] = useState(isRussian);

  return (
    <label htmlFor='language-switcher' className={cx('header__switch-language')}>
      <input
        type='checkbox'
        id='language-switcher'
        className={cx('header__switch-language-input')}
        onChange={handleChange}
        defaultChecked={checked}
      />
      <span className={cx('header__switch-language-circle')} />
    </label>
  );
};

export default SwitcherInput;

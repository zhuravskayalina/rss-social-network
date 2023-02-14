import classNames from 'classnames/bind';
import styles from './switcherLanguage.module.scss';
import SwitcherInput from '../SwitcherInput/SwitcherInput';
import { ChangeLocalProps } from '../../../../AppTypes';

const cx = classNames.bind(styles);

const SwitcherLanguage = ({ currentLocale, handleChange }: ChangeLocalProps) => {
  return (
    <div className={cx('language-switcher')}>
      <span className={cx('switcher__text-language', 'header__empty-space')}>ENG</span>
      <SwitcherInput currentLocale={currentLocale} handleChange={handleChange} />
      <span className={cx('switcher__text-language')}>RU</span>
    </div>
  );
};

export default SwitcherLanguage;

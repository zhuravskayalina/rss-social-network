import classNames from 'classnames/bind';
import styles from './switcherLanguage.module.scss';
import SwitcherInput from '../SwitcherInput/SwitcherInput';

const classStyles = classNames.bind(styles);

const SwitcherLanguage = () => {
  return (
    <div className={classStyles('language-switcher')}>
      <span className={classStyles('switcher__text-language', 'header__empty-space')}>ENG</span>
      <SwitcherInput />
      <span className={classStyles('switcher__text-language')}>RU</span>
    </div>
  );
};

export default SwitcherLanguage;

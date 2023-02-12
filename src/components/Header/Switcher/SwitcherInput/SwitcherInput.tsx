import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './switcher.module.scss';
import { LanguageContext } from '../../../providers/LanguageProvider';

const classStyles = classNames.bind(styles);

const SwitcherInput = () => {
  const { language, setState } = useContext(LanguageContext);

  const handleChange = (): void => {
    setState(language === 'english' ? 'russian' : 'english');
  };

  return (
    <label htmlFor='language-switcher' className={classStyles('header__switch-language')}>
      <input
        type='checkbox'
        id='language-switcher'
        className={classStyles('header__switch-language-input')}
        onChange={handleChange}
      />
      <span className={classStyles('header__switch-language-circle')} />
    </label>
  );
};

export default SwitcherInput;

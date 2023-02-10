import classNames from 'classnames/bind';
import styles from './switcher.module.scss';

const classStyles = classNames.bind(styles);

const Switcher = () => {
  return (
    <label htmlFor='language-switcher' className={classStyles('header__switch-language')}>
      <input
        type='checkbox'
        id='language-switcher'
        className={classStyles('header__switch-language-input')}
      />
      <span className={classStyles('header__switch-language-circle')} />
    </label>
  );
};

export default Switcher;

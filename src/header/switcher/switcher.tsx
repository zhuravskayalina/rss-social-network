import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../../index.scss';

const classStyles = classNames.bind(styles);

const Switcher = () => {
  const [isRussian, setRussian] = useState(false);

  const toggleClass = () => {
    setRussian(!isRussian);
  };

  return (
    <div
      className={classStyles('header__switch-language', isRussian ? 'on' : '')}
      onClick={toggleClass}
    />
  );
};

export default Switcher;

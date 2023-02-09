import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './App.scss';
import { ReactComponent as MenuIcon } from './assets/icons/menu.svg';
import Header from './components/header/header';

const cx = classNames.bind(styles);

const App = () => {
  const [value, setValue] = useState<boolean>(false);
  const buttonStateClass = value ? 'rose' : 'blue';

  return (
    <div className={cx('app')}>
      {/* <MenuIcon /> */}
      {/* <p className={cx(buttonStateClass)}>Rose</p> */}

      {/* <button type='button' onClick={() => setValue((prevState) => !prevState)}> */}
      {/*   Change Rose to Blue */}
      {/* </button> */}
      {/* <button type='button' className={cx('icon-voice')} /> */}
      <Header />
    </div>
  );
};

export default App;

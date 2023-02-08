import classNames from 'classnames/bind';
import styles from './App.scss';

import MainContainer from './components/mainContainer/MainContainer';
import ProfileSection from './components/profileSection/ProfileSection';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx('app')}>
      <MainContainer>
        <ProfileSection />
      </MainContainer>
    </div>
  );
};

export default App;

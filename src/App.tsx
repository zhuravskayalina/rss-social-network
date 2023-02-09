import classNames from 'classnames/bind';
import styles from './App.scss';

import MainContainer from './components/mainContainer/MainContainer';
import ProfileSection from './components/profileSection/ProfileSection';

import profileImg from './assets/images/max.jpeg';

const cx = classNames.bind(styles);

const App = () => {
  const user = {
    name: 'Max',
    surname: 'Mayfield',
    location: 'Hawkins, Indiana',
    profilePhoto: profileImg,
  };

  return (
    <div className={cx('app')}>
      <MainContainer>
        <ProfileSection user={user} />
      </MainContainer>
    </div>
  );
};

export default App;

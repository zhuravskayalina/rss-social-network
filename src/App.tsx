import classNames from 'classnames/bind';
import styles from './App.scss';
import { LanguageProvider } from './components/providers/LanguageProvider';

import MainContainer from './components/MainContainer/MainContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Header from './components/Header/Header';

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
      <LanguageProvider>
        <Header />
        <MainContainer>
          <ProfileSection user={user} />
        </MainContainer>
      </LanguageProvider>
    </div>
  );
};

export default App;

import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';
import { LOCALES } from './IntlLocale/locales';
import { messages } from './IntlLocale/messages';
import styles from './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import profileImg from './assets/images/max.jpeg';
import { getInitialLocale } from './localStorageUtils';
import MainPage from './components/mainPage/MainPage';
import Timeline from './components/ProfileSection/MainSection/ContentSection/Timeline/Timeline';

const cx = classNames.bind(styles);

const user = {
  name: 'Max',
  surname: 'Mayfield',
  location: 'Hawkins, Indiana',
  profilePhoto: profileImg,
};

const profilePage = (
  <MainContainer>
    <ProfileSection user={user} />
  </MainContainer>
);

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  const handleChange = () => {
    setCurrentLocale(
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`,
    );
    const localeForStorage =
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    localStorage.setItem('locale', `${localeForStorage}`);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={cx('app')}>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='profile' element={profilePage}>
            <Route path='' element={<Timeline />} />
            <Route path='about' element={<div>About</div>} />
            <Route path='friends' element={<div>Friends</div>} />
            <Route path='gallery' element={<div>Gallery</div>} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;

import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';
import { LOCALES } from './IntlLocale/locales';
import { messages } from './IntlLocale/messages';
import styles from './App.scss';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import { getInitialLocale } from './localStorageUtils';
import MainPage from './components/mainPage/MainPage';
import Timeline from './components/ProfileSection/MainSection/ContentSection/Timeline/Timeline';
import { User } from './types/interfaces';
import { NetworkClient } from './NetworkClient/NetworkClient';
import About from './components/ProfileSection/MainSection/ContentSection/About/About';
import Page404 from './components/Page404/Page404';
import Loading from './components/Loading/Loading';
import FotoGallery from './components/FotoGallery/FotoGallery';
import FriendsSection from './components/FriendsSection/FriendsSection';
import DialogPageWrapper from './components/DialogPage/DialogsPageWrapper/DialogsPageWrapper';

const cx = classNames.bind(styles);

const getProfilePage = (user: User) => {
  if (user)
    return (
      <MainContainer>
        <ProfileSection user={user} />
      </MainContainer>
    );
};

const App = () => {
  const userId = '2';

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [user, setUser] = useState<User>();
  const [foto, setFoto] = useState<string[]>([]);

  useEffect(() => {
    NetworkClient.getUser(userId).then((userData) => {
      setUser(userData);
      setFoto(userData.photos);
    });
  }, []);

  const handleChange = () => {
    setCurrentLocale(
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`,
    );
    const localeForStorage =
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    localStorage.setItem('locale', `${localeForStorage}`);
  };

  return user ? (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={cx('app')}>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='profile' element={getProfilePage(user)}>
            <Route path='' element={<Timeline user={user} />} />
            <Route path='about' element={<About user={user} setUser={setUser} />} />
            <Route path='friends' element={<FriendsSection userId={userId} />} />
            <Route path='gallery' element={<FotoGallery foto={foto} />} />
          </Route>
          <Route path='messages' element={<DialogPageWrapper user={user} />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </IntlProvider>
  ) : (
    <Loading />
  );
};

export default App;

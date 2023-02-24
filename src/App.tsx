import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LOCALES } from './IntlLocale/locales';
import { messages } from './IntlLocale/messages';
import styles from './App.scss';
import Header from './components/Header/Header';
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
import FriendsSection from './components/FriendsSection/FriendsSection';
import Authorization from './components/Authorization/Authorization';

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
  const isUserLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  const [isLoggedIn, setLoggedIn] = useState(isUserLoggedIn());
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [user, setUser] = useState<User>();
  const [photos, setPhotos] = useState<string[]>([]);
  const [isAuthModalActive, setAuthModalActive] = useState(false);
  const [isUserLoading, setUserLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setUserLoading(true);
      const userId = localStorage.getItem('loggedUserId') as string;
      NetworkClient.getUser(userId).then((userData) => {
        setUser(userData);
        setPhotos(userData.photos);
        setUserLoading(false);
      });
    } else {
      setUserLoading(false);
    }
  }, []);

  const handleChangeLanguage = () => {
    setCurrentLocale(
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`,
    );
    const localeForStorage =
      currentLocale === `${LOCALES.ENGLISH}` ? `${LOCALES.RUSSIAN}` : `${LOCALES.ENGLISH}`;
    localStorage.setItem('locale', `${localeForStorage}`);
  };

  const handleOpenAuthorization = () => {
    setAuthModalActive((prev) => !prev);
  };

  const logOut = () => {
    setLoggedIn(false);
    setUser(undefined);
    localStorage.removeItem('loggedUserId');
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={cx('app')}>
        <Header
          currentLocale={currentLocale}
          handleChange={handleChangeLanguage}
          openAuthorization={handleOpenAuthorization}
          isLoggedIn={isLoggedIn}
          logOut={logOut}
          user={user}
        />
        {!isUserLoading ? (
          <Routes>
            <Route path='' element={<MainPage />} />
            {user && (
              <Route path={`profile/${user.id}`} element={getProfilePage(user)}>
                <Route path='' element={<Timeline user={user} />} />
                <Route path='about' element={<About user={user} setUser={setUser} />} />
                <Route path='friends' element={<FriendsSection userId={user.id} />} />
                <Route path='gallery' element={<FotoGallery photos={photos} />} />
              </Route>
              <Route path='messages' element={<DialogPageWrapper user={user} />} />
            )}
            <Route path='*' element={<Page404 />} />
          </Routes>
        ) : (
          <Loading />
        )}
        <Authorization
          isAuthModalActive={isAuthModalActive}
          setAuthModalActive={setAuthModalActive}
          setUser={setUser}
          setLoggedIn={setLoggedIn}
        />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;

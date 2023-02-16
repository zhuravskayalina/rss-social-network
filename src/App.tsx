import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';
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
import { PostItem, User } from './types/interfaces';
import { NetworkClient } from './NetworkClient/NetworkClient';
import About from './components/ProfileSection/MainSection/ContentSection/About/About';
import Page404 from './components/Page404/Page404';

const cx = classNames.bind(styles);

const getProfilePage = (user: User | null) => {
  if (user)
    return (
      <MainContainer>
        <ProfileSection user={user} />
      </MainContainer>
    );
};

const App = () => {
  const userId = '1';

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    NetworkClient.getUser(userId).then((userData) => {
      setUser(userData);
      setPosts(userData.posts);
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

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={cx('app')}>
        <Header currentLocale={currentLocale} handleChange={handleChange} isUser={!!user} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          {user ? (
            <Route path='profile' element={getProfilePage(user)}>
              <Route path='' element={<Timeline posts={posts} setPosts={setPosts} user={user} />} />
              <Route path='about' element={<About user={user} />} />
              <Route path='friends' element={<div>Friends</div>} />
              <Route path='gallery' element={<div>Gallery</div>} />
            </Route>
          ) : null}
          <Route index element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;

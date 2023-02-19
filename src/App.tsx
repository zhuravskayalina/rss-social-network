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
import { FriendType, PostItem, User } from './types/interfaces';
import { NetworkClient } from './NetworkClient/NetworkClient';
import About from './components/ProfileSection/MainSection/ContentSection/About/About';
import Page404 from './components/Page404/Page404';
import Loading from './components/Loading/Loading';
import FriendsSection from './components/FriendsSection/FriendsSection';

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
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [friends, setFriends] = useState<FriendType[]>([]);

  useEffect(() => {
    NetworkClient.getUser(userId).then((userData) => {
      setUser(userData);
      setPosts(userData.posts);
      setFriends(userData.friends);
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
            <Route path='' element={<Timeline posts={posts} setPosts={setPosts} user={user} />} />
            <Route path='about' element={<About user={user} />} />
            <Route
              path='friends'
              element={<FriendsSection friends={friends} setFriends={setFriends} userId={userId} />}
            />
            <Route path='gallery' element={<div>Gallery</div>} />
          </Route>
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

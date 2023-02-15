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

const cx = classNames.bind(styles);

const userEx: User = {
  id: '',
  name: 'Name',
  surname: 'Surname',
  location: 'City, Country',
  profilePhoto: null,
  posts: [
    {
      id: '',
      userId: '',
      user: {
        id: '',
        name: '',
        surname: '',
      },
      date: '',
      content: '',
      likes: 0,
      isLikedByUser: false,
    },
  ],
};

const getProfilePage = (user: User) => {
  return (
    <MainContainer>
      <ProfileSection user={user} />
    </MainContainer>
  );
};

const App = () => {
  const userId = '1';

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [user, setUser] = useState<User>(userEx);
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
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Routes>
          <Route path='' element={<MainPage />} />
          <Route path='profile' element={getProfilePage(user)}>
            <Route path='' element={<Timeline posts={posts} setPosts={setPosts} user={user} />} />
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

import { IntlProvider } from 'react-intl';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { Chat, User } from './types/interfaces';
import { NetworkClient } from './NetworkClient/NetworkClient';
import About from './components/ProfileSection/MainSection/ContentSection/About/About';
import Page404 from './components/Page404/Page404';
import Loading from './components/Loading/Loading';
import FriendsSection from './components/FriendsSection/FriendsSection';
import Authorization from './components/Authorization/Authorization';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import DialogPageWrapper from './components/DialogPage/DialogsPageWrapper/DialogsPageWrapper';
import NewsFeed from './components/NewsFeed/NewsFeed';
import AllUsersPage from './components/allUsersPage/AllUsersPage';

const cx = classNames.bind(styles);

const getProfilePage = (
  user: User | undefined,
  loggedUser: User,
  isOwnPage: boolean,
  handleClickMessage: (isHaveChat: boolean, friend: User) => void,
) => {
  if (user)
    return (
      <MainContainer>
        <ProfileSection
          user={user}
          loggedUser={loggedUser}
          isOwnPage={isOwnPage}
          handleClickMessage={handleClickMessage}
        />
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
  const [isAuthModalActive, setAuthModalActive] = useState(false);
  const [isUserLoading, setUserLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<User>();
  const [isOwnPage, setIsOwnPage] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const setAnotherUserDetails = (condition: boolean, id: string) => {
    if (condition) {
      setUserLoading(true);
      NetworkClient.getUser(id).then((userData) => {
        setUserDetails(userData);
        setUserLoading(false);
      });
    }
  };

  useEffect(() => {
    const path = location.pathname.split('/');
    const id = path[2];

    if (isLoggedIn) {
      if (!user) {
        setUserLoading(true);
        const userId = localStorage.getItem('loggedUserId') as string;
        NetworkClient.getUser(userId).then((userData) => {
          setUser(userData);
          setUserLoading(false);

          const returnIsOwnPage = !id || userData.id === id;
          setIsOwnPage(returnIsOwnPage);
          setAnotherUserDetails(!returnIsOwnPage && userDetails?.id !== id, id);
        });
      } else {
        const returnIsOwnPage = user.id === id;
        setIsOwnPage(returnIsOwnPage);
        setAnotherUserDetails(!returnIsOwnPage && userDetails?.id !== id, id);
      }
    } else {
      setUserLoading(false);
    }
  }, [location]);

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

  const handleClickMessage = (isHaveChat: boolean, friend: User) => {
    if (!isHaveChat) {
      const emptyChat: Chat = {
        senderId: friend.id,
        senderInfo: {
          name: friend.name,
          surname: friend.surname,
          profilePhoto: friend.profilePhoto as string,
        },
        history: [],
      };

      if (user) {
        const userCopy = { ...user };
        if (userCopy.chat) {
          userCopy.chat.push(emptyChat);
          setUser(userCopy);
        }
      }
    }
  };

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUser(undefined);
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
            <Route
              path=''
              element={
                <MainPage
                  userId={user?.id}
                  isLoggedIn={isLoggedIn}
                  openAuthorization={handleOpenAuthorization}
                />
              }
            />
            {user && (
              <>
                <Route
                  path={`profile/${isOwnPage ? user.id : (userDetails as User).id}`}
                  element={getProfilePage(
                    isOwnPage ? user : userDetails,
                    user,
                    isOwnPage,
                    handleClickMessage,
                  )}
                >
                  <Route
                    path=''
                    element={
                      <Timeline
                        user={isOwnPage ? user : (userDetails as User)}
                        isOwnPage={isOwnPage}
                      />
                    }
                  />
                  <Route
                    path='about'
                    element={
                      <About
                        user={isOwnPage ? user : (userDetails as User)}
                        setUser={setUser}
                        isOwnPage={isOwnPage}
                      />
                    }
                  />
                  <Route
                    path='friends'
                    element={
                      <FriendsSection
                        userId={isOwnPage ? user.id : ((userDetails as User).id as string)}
                        isOwnPage={isOwnPage}
                      />
                    }
                  />
                  <Route
                    path='gallery'
                    element={
                      <PhotoGallery
                        user={isOwnPage ? user : (userDetails as User)}
                        setUser={setUser}
                        isOwnPage={isOwnPage}
                      />
                    }
                  />
                  <Route
                    path='newsfeed'
                    element={<NewsFeed userId={user.id} isOwnPage={isOwnPage} />}
                  />
                </Route>
                <Route path={`messages/${user.id}`} element={<DialogPageWrapper user={user} />} />
                <Route path={`users/${user.id}`} element={<AllUsersPage />} />
              </>
            )}
            <Route path='*' element={<Page404 />} />
          </Routes>
        ) : (
          <Loading isOnFullScreen />
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

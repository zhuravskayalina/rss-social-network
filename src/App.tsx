import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import classNames from 'classnames/bind';
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

const cx = classNames.bind(styles);

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

  const user = {
    name: 'Max',
    surname: 'Mayfield',
    location: 'Hawkins, Indiana',
    profilePhoto: profileImg,
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={cx('app')}>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <MainPage />
        {/* <MainContainer> */}
        {/*   /!* <ProfileSection user={user} /> *!/ */}
        {/* </MainContainer> */}
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;

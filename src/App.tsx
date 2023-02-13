import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
import { LOCALES } from './IntlLocale/locales';
import { messages } from './IntlLocale/messages';
import MainContainer from './components/MainContainer/MainContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Header from './components/Header/Header';
import profileImg from './assets/images/max.jpeg';
import { getInitialLocal } from './localStorageUtils';

const cx = classNames.bind(styles);

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

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
        <MainContainer>
          <ProfileSection user={user} />
        </MainContainer>
        ( console.log(IntlProvider), )
      </div>
    </IntlProvider>
  );
};

export default App;

import classNames from 'classnames/bind';
import styles from './about.module.scss';
import InfoBlock from './InfoBlock/InfoBlock';
import { AboutProps, UserData } from './types';

const cx = classNames.bind(styles);

const About = ({ user }: AboutProps) => {
  const contactInfo: Partial<UserData> = {
    name: user.name,
    email: user.email,
    instagram: user.socialMedia.instagram
      ? `https://www.instagram.com/${user.socialMedia.instagram}`
      : 'no link :(',
    twitter: user.socialMedia.twitter
      ? `https://twitter.com/${user.socialMedia.twitter}`
      : 'no link :(',
    linkedIn: user.socialMedia.linkedIn
      ? `https://www.linkedin.com/in/${user.socialMedia.linkedIn}`
      : 'no link :(',
  };
  const personalInfo: Partial<UserData> = {
    hobbies: user.info.hobbies,
    'favourite music': user.info.music,
    'favourite books': user.info.books,
    'favourite movies': user.info.cinema,
  };

  return (
    <div className={cx('about')}>
      <InfoBlock heading='contact info' data={contactInfo} />
      <InfoBlock heading='personal info' data={personalInfo} />
    </div>
  );
};

export default About;

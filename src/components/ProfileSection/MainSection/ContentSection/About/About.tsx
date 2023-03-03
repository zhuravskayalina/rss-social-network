import classNames from 'classnames/bind';
import styles from './about.module.scss';
import InfoBlock from './InfoBlock/InfoBlock';
import { AboutProps, UserData } from './types';
import { NetworkClient } from '../../../../../NetworkClient/NetworkClient';

const cx = classNames.bind(styles);

const About = ({ user, setUser, isOwnPage }: AboutProps) => {
  const changeField = (field: string, content: string, initialContent: string) => {
    if (content === initialContent) return;

    const userClone = structuredClone(user);

    if (userClone[field]) {
      userClone[field] = content;
    } else if (field === 'instagram' || field === 'twitter' || field === 'linkedIn') {
      userClone.socialMedia[field] = content;
    } else {
      userClone.info[field] = content;
    }

    NetworkClient.updateUser(user.id, userClone).then(() => {
      setUser(userClone);
    });
  };

  const contactInfo: Partial<UserData> = {
    name: user.name,
    email: user.email,
    instagram: user.socialMedia.instagram ? `@${user.socialMedia.instagram}` : 'no link :(',
    twitter: user.socialMedia.twitter ? `@${user.socialMedia.twitter}` : 'no link :(',
    linkedIn: user.socialMedia.linkedIn ? `${user.socialMedia.linkedIn}` : 'no link :(',
  };

  const personalInfo: Partial<UserData> = {
    hobbies: user.info.hobbies,
    music: user.info.music,
    books: user.info.books,
    cinema: user.info.cinema,
  };

  return (
    <div className={cx('about')}>
      <InfoBlock
        heading='contact info'
        data={contactInfo}
        changeField={changeField}
        isOwnPage={isOwnPage}
      />
      <InfoBlock
        heading='personal info'
        data={personalInfo}
        changeField={changeField}
        isOwnPage={isOwnPage}
      />
    </div>
  );
};

export default About;

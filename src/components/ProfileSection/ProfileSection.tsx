import classNames from 'classnames/bind';
import styles from './profile-section.module.scss';
import Cover from './Cover/Cover';
import ProfileNavigation from './Navigation/ProfileNavigation';
import MainSection from './MainSection/MainSection';
import { ProfileSectionProps } from './types';

const cx = classNames.bind(styles);

const ProfileSection = ({
  user,
  loggedUser,
  isOwnPage,
  handleClickMessage,
}: ProfileSectionProps) => {
  return (
    <div className={cx('profile')}>
      <Cover
        user={user}
        loggedUser={loggedUser}
        isOwnPage={isOwnPage}
        handleClickMessage={handleClickMessage}
      />
      <ProfileNavigation />
      <MainSection />
    </div>
  );
};

export default ProfileSection;

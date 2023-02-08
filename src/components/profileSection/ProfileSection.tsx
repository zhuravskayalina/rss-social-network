import classNames from 'classnames/bind';
import styles from './profile-section.module.scss';
import Cover from './Cover/Cover';

const cx = classNames.bind(styles);

const ProfileSection = () => {
  return (
    <div className={cx('profile')}>
      <Cover />
    </div>
  );
};

export default ProfileSection;

import classNames from 'classnames/bind';
import styles from './profile-nav.module.scss';
import NavItem from './NavItem/NavItem';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: 'timeline',
    url: '/timeline',
  },
  {
    title: 'about',
    url: '/about',
  },
  {
    title: 'friends',
    url: '/friends',
  },
  {
    title: 'gallery',
    url: '/gallery',
  },
];

const ProfileNavigation = () => {
  return (
    <ul className={cx('nav')}>
      {navItems.map(({ title, url }) => (
        <NavItem title={title} url={url} key={title} />
      ))}
    </ul>
  );
};

export default ProfileNavigation;

import classNames from 'classnames/bind';
import styles from './HeaderNavigation.module.scss';
import { NavItemInterface } from './types';
import NavItem from './HeaderNavItem';
import { navItems } from './HeaderNavigationDataBase';

const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <div className={cx('nav')}>
      {navItems.map((item: NavItemInterface) => (
        <li key={item.key} className={cx('nav__item')}>
          <NavItem item={item} />
        </li>
      ))}
    </div>
  );
};

export default Navigation;

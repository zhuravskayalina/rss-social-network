import classNames from 'classnames/bind';
import styles from './HeaderNavigation.module.scss';
import { NavItemInterface, UserNavProps } from './types';
import NavItem from './HeaderNavItem';
import { navItems } from './HeaderNavigationDataBase';

const cx = classNames.bind(styles);

const Navigation = ({ userId, clickNavMenuButtonHandler }: UserNavProps) => {
  return (
    <nav className={cx('nav')}>
      <ul>
        {navItems.map((item: NavItemInterface) => (
          <li key={item.key} className={cx('nav__item')}>
            <NavItem
              item={item}
              userId={userId}
              clickNavMenuButtonHandler={clickNavMenuButtonHandler}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

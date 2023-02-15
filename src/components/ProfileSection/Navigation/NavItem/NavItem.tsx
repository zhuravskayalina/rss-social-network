import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './nav-item.module.scss';
import { NavItemProps } from './types';

const cx = classNames.bind(styles);

const NavItem = ({ title, url }: NavItemProps) => {
  const basicClassName = 'nav-item__link';
  const activeClassName = 'nav-item__link_active';

  return (
    <li className={cx('nav-item')}>
      <NavLink
        to={url}
        end
        className={({ isActive }) => cx(basicClassName, { [activeClassName]: isActive })}
      >
        <FormattedMessage id={title} />
      </NavLink>
    </li>
  );
};

export default NavItem;

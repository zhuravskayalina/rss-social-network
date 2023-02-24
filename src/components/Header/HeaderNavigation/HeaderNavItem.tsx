import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';
import { NavProps } from './types';

const cx = classNames.bind(styles);

const NavItem = ({ item: { icon, description, link } }: NavProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipTimeout = useRef<NodeJS.Timeout>();

  const mouseEnterHandler = () => {
    toolTipTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 750);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(toolTipTimeout.current);
    setShowToolTip(false);
  };

  return (
    <div
      className={cx('nav__icon')}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={link} className={cx('nav__icon-link')}>
        {icon}
      </Link>
      {showToolTip && (
        <div className={cx('nav__toolTip')}>
          <div className={cx('nav__cloud-wrapper')}>{description}</div>
        </div>
      )}
    </div>
  );
};

export default NavItem;

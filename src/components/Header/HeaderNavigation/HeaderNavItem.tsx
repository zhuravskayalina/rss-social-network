import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';
import { NavProps } from './types';

const cx = classNames.bind(styles);

const NavItem = ({
  item: { icon, description, link, sublink },
  userId,
  clickNavMenuButtonHandler,
}: NavProps) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipTimeout = useRef<NodeJS.Timeout>();

  const mouseEnterHandler = () => {
    toolTipTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 1600);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(toolTipTimeout.current);
    setShowToolTip(false);
  };

  return (
    <button
      className={cx('nav__icon')}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={() => clickNavMenuButtonHandler()}
    >
      <Link to={`${link}/${userId}${sublink}`} className={cx('nav__icon-link')}>
        {icon}
      </Link>
      {showToolTip && (
        <div className={cx('nav__toolTip')}>
          <div className={cx('nav__cloud-wrapper')}>{description}</div>
        </div>
      )}
    </button>
  );
};

export default NavItem;

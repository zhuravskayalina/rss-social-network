import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './media-link.module.scss';
import { ExternalLink } from '../types';

const cx = classNames.bind(styles);

const MediaLink = ({ title, url, icon }: ExternalLink) => {
  const linkTitle = title.toLowerCase();

  return (
    <li className={cx('link', `link_${linkTitle}`)}>
      <Link className={cx('link__item')} to={url}>
        <img className={cx('link__icon', `icon_${linkTitle}`)} src={icon} alt={linkTitle} />
      </Link>
    </li>
  );
};

export default MediaLink;

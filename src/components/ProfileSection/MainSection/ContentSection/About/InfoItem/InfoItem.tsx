import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './info-item.module.scss';
import { InfoItemProps } from './types';

const cx = classNames.bind(styles);

const InfoItem = ({ sectionName, sectionContent }: InfoItemProps) => {
  const formatStringToLink = (string: string) => {
    if (string.startsWith('http')) {
      return (
        <Link className={cx('item__link')} to={string}>
          watch
        </Link>
      );
    }
    return string;
  };

  return (
    <li className={cx('item')}>
      <span className={cx('item__name')}>{sectionName}</span>
      <span className={cx('item__content')}>{formatStringToLink(sectionContent)}</span>
    </li>
  );
};

export default InfoItem;

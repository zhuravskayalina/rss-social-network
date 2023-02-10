import classNames from 'classnames/bind';
import styles from './cover.module.scss';
import SocialMediaList from './SocialMediaList/SocialMediaList';
import { CoverProps } from './types';

const cx = classNames.bind(styles);

const Cover = ({ user: { name, surname, location, profilePhoto } }: CoverProps) => {
  return (
    <div className={cx('cover')}>
      <div className={cx('cover__gradient')}>
        <div className={cx('cover__info-block')}>
          <img className={cx('cover__img')} src={profilePhoto} alt='profile' />
          <div className={cx('cover-info')}>
            <p className={cx('cover-info__name')}>
              {name} {surname}
            </p>
            <p className={cx('cover-info__location')}>{location}</p>
            <SocialMediaList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

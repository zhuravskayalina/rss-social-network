import { useIntl } from 'react-intl';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './cover.module.scss';
import SocialMediaList from './SocialMediaList/SocialMediaList';
import { CoverProps } from './types';
import noAvatarImg from '../../../assets/images/user-avatar.png';
import { ReactComponent as AddFriendIcon } from '../../../assets/icons/add-friend.svg';
import { ReactComponent as SendMessageIcon } from '../../../assets/icons/send-message.svg';

const cx = classNames.bind(styles);

const Cover = ({ user: { name, surname, location, profilePhoto, id }, isOwnPage }: CoverProps) => {
  const intl = useIntl();

  return (
    <div className={cx('cover')}>
      <div className={cx('cover__gradient')}>
        <div className={cx('cover__info-block')}>
          <div className={cx('cover__image')}>
            <div className={cx('cover__img-box')}>
              <img className={cx('cover__img')} src={profilePhoto || noAvatarImg} alt='profile' />
            </div>
          </div>
          <div className={cx('cover-info')}>
            <p className={cx('cover-info__name')}>
              {name} {surname}
            </p>
            <p className={cx('cover-info__location')}>{location}</p>
            <SocialMediaList />
          </div>
          {!isOwnPage && (
            <div className={cx('cover-controls')}>
              <Link
                to='#'
                className={cx('cover-controls__link')}
                title={intl.formatMessage({ id: 'addToFriends' })}
              >
                <AddFriendIcon />
              </Link>
              <Link
                to={`/messages/${id}`}
                className={cx('cover-controls__link')}
                title={intl.formatMessage({ id: 'sendMessage' })}
              >
                <SendMessageIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cover;

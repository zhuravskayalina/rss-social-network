import { useIntl } from 'react-intl';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './cover.module.scss';
import SocialMediaList from './SocialMediaList/SocialMediaList';
import { CoverProps } from './types';
import noAvatarImg from '../../../assets/images/user-avatar.png';
import { ReactComponent as AddFriendIcon } from '../../../assets/icons/add-friend.svg';
import { ReactComponent as SendMessageIcon } from '../../../assets/icons/send-message.svg';
import { Chat } from '../../../types/interfaces';

const cx = classNames.bind(styles);

const Cover = ({ user, loggedUser: { chat }, isOwnPage, handleClickMessage }: CoverProps) => {
  const intl = useIntl();

  const loggedUserId = localStorage.getItem('loggedUserId');
  const isAlreadyHaveChat = (friendId: string, loggedUserChats: Chat[]) => {
    const matches = loggedUserChats.find((item) => {
      return item.senderId === friendId;
    });
    return !!matches;
  };

  return (
    <div className={cx('cover')}>
      <div className={cx('cover__gradient')}>
        <div className={cx('cover__info-block')}>
          <div className={cx('cover__image')}>
            <div className={cx('cover__img-box')}>
              <img
                className={cx('cover__img')}
                src={user.profilePhoto || noAvatarImg}
                alt='profile'
              />
            </div>
          </div>
          <div className={cx('cover-info')}>
            <p className={cx('cover-info__name')}>
              {user.name} {user.surname}
            </p>
            <p className={cx('cover-info__location')}>{user.location}</p>
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
                to={`/messages/${loggedUserId}`}
                title={intl.formatMessage({ id: 'sendMessage' })}
              >
                <button
                  type='button'
                  className={cx('cover-controls__link')}
                  onClick={() => {
                    handleClickMessage(isAlreadyHaveChat(user.id, chat), user);
                  }}
                >
                  <SendMessageIcon />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cover;

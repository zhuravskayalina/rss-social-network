import classNames from 'classnames/bind';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

const cx = classNames.bind(styles);

const Friend = ({
  friend: { name, surname, profilePhoto, id },
  deleteFriend,
  isOwnPage,
}: FriendProps) => {
  const intl = useIntl();
  return (
    <Link to={`/profile/${id}`} className={cx('friend')}>
      <div
        className={cx('friend__photo')}
        style={{
          background: `url(${profilePhoto}) 50%/ cover border-box padding-box`,
        }}
      />
      <div className={cx('friend__info')}>
        <h3 className={cx('friend__name')}>
          {name} {surname}
        </h3>
      </div>
      {isOwnPage && (
        <button
          className={cx('friend__delete')}
          onClick={deleteFriend}
          title={intl.formatMessage({ id: 'delFriend' })}
        >
          <DeleteIcon className={cx('friend__delete-icon')} />
        </button>
      )}
    </Link>
  );
};

export default Friend;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

const cx = classNames.bind(styles);

const Friend = ({
  friend: { name, surname, profilePhoto, id },
  deleteFriend,
  // handleClickOnFriend,
  isOwnPage,
}: FriendProps) => {
  return (
    <div className={cx('friend')}>
      <Link to={`/profile/${id}`}>
        <div
          className={cx('friend__photo')}
          style={{
            background: `url(${profilePhoto}) 50%/ cover border-box padding-box`,
          }}
        />
      </Link>
      <div className={cx('friend__info')}>
        <h3>
          {name} {surname}
        </h3>
      </div>
      {isOwnPage && (
        <button className={cx('friend__delete')} onClick={deleteFriend}>
          <DeleteIcon className={cx('friend__delete-icon')} />
        </button>
      )}
    </div>
  );
};

export default Friend;

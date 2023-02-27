import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

const cx = classNames.bind(styles);

const Friend = ({ friend: { id, name, surname, profilePhoto }, deleteFriend }: FriendProps) => {
  const locale = localStorage.getItem('locale');
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/profile/${id}`;
    navigate(path);
  };
  return (
    <div className={cx('friend')} onClick={() => routeChange()}>
      <div
        className={cx('friend__photo')}
        style={{
          background: `url(${profilePhoto}) 50%/ cover border-box padding-box`,
        }}
      />
      <div className={cx('friend__info')}>
        <h3>
          {name} {surname}
        </h3>
      </div>
      <button
        className={cx('friend__delete')}
        onClick={deleteFriend}
        title={locale === 'ru' ? 'Удалить из друзей' : 'Remove from friends'}
      >
        <DeleteIcon className={cx('friend__delete-icon')} />
      </button>
    </div>
  );
};

export default Friend;

import classNames from 'classnames/bind';
import { useIntl } from 'react-intl';
import styles from './friend.module.scss';
import { FriendProps } from './types';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

const cx = classNames.bind(styles);

const Friend = ({ friend: { name, surname, profilePhoto }, deleteFriend }: FriendProps) => {
  const intl = useIntl();
  return (
    <div className={cx('friend')}>
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
        title={intl.formatMessage({ id: 'delFriend' })}
      >
        <DeleteIcon className={cx('friend__delete-icon')} />
      </button>
    </div>
  );
};

export default Friend;

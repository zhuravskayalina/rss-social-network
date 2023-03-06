import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './user-card.module.scss';
import { User } from '../../../types/interfaces';
import { ReactComponent as Arrow } from '../../../assets/icons/btn-arrow.svg';

const cx = classNames.bind(styles);

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.id}`} className={cx('link')}>
      <div className={cx('card')}>
        <div
          className={cx('card__photo')}
          style={{
            background: `url(${user.profilePhoto}) 50%/ cover border-box padding-box`,
          }}
        />
        <div className={cx('info')}>
          <p className={cx('info__name')}>
            {user.name} {user.surname}
          </p>
          <p className={cx('info__location')}>{user.location}</p>
        </div>
        <div className={cx('interests')}>
          <p className={cx('interests__heading')}>{user.name} likes:</p>
          <p>&quot;{user.info.hobbies}&quot;</p>
        </div>
        <div className={cx('arrow')}>
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

export default UserCard;

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './all-users-page.module.scss';
import { NetworkClient } from '../../NetworkClient/NetworkClient';
import { User } from '../../types/interfaces';
import UserCard from './UserCard/UserCard';
import { ReactComponent as OwlLogo } from '../../assets/icons/logoBlack.svg';

const cx = classNames.bind(styles);

const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    NetworkClient.getUsers().then((users) => {
      setAllUsers(users);
    });
  });

  return (
    <div className={cx('main', 'all-users')}>
      <div className={cx('all-users__container')}>
        <h2 className={cx('all-users__heading')}>
          Meet
          <div className={cx('logo')}>
            <OwlLogo className={cx('logo-svg')} />
          </div>
          people:
        </h2>
        <div className={cx('users-block')}>
          {allUsers.map((user: User) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllUsersPage;

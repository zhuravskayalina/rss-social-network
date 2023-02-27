import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import { NetworkClient } from 'src/NetworkClient/NetworkClient';
import { ChangeEvent, useEffect, useState } from 'react';
import { FriendType } from 'src/types/interfaces';
import { FriendSectionProps } from './types';
import styles from './friendss-section.module.scss';
import Friend from './Friend/Friend';

const cx = classNames.bind(styles);

const FriendsSection = ({ userId, isOwnPage }: FriendSectionProps) => {
  const [value, setValue] = useState<'name' | 'surname'>('name');
  const [friends, setFriends] = useState<FriendType[]>([]);

  useEffect(() => {
    NetworkClient.getFriends(userId).then((userData) => {
      setFriends(userData);
    });
  }, []);

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as 'name' | 'surname');
  };

  friends.sort((a, b) => a[value].localeCompare(b[value]));

  const deleteFriend = (friendId: string) => {
    NetworkClient.deleteFriend(userId, friendId).then(() => {
      const newFriends = friends.filter(({ id }) => id !== friendId);
      setFriends(newFriends);
    });
  };

  const friendsEl: JSX.Element[] = friends.map((friend) => (
    <Friend
      deleteFriend={() => deleteFriend(friend.id)}
      friend={friend}
      key={friend.id}
      // handleClickOnFriend={handleClickOnFriend}
      isOwnPage={isOwnPage}
    />
  ));
  if (!friends.length) {
    return (
      <h2>
        <FormattedMessage id='noFriend' />
      </h2>
    );
  }
  return (
    <div className={cx('main')}>
      <div className={cx('main__friends')}>
        <div className={cx('main__friends-filter')}>
          <div className={cx('filter')}>
            <span>
              <FormattedMessage id='sort' />
            </span>
            <select className={cx('filter-select')} value={value} onChange={changeSelect}>
              <option value='name'>
                <FormattedMessage id='name' />
              </option>
              <option value='surname'>
                <FormattedMessage id='surname' />
              </option>
            </select>
          </div>
        </div>
        <div className={cx('main__friends-wrapper')}>{friendsEl}</div>
      </div>
    </div>
  );
};

export default FriendsSection;

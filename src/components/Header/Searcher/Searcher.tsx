import { useIntl } from 'react-intl';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NetworkClient } from 'src/NetworkClient/NetworkClient';
import { SearcherProps } from './type';
import styles from './searcher.module.scss';

const cx = classNames.bind(styles);

const Searcher = ({ userId, friends, setFriends }: SearcherProps) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const [value, setValue] = useState<string>('');

  const refreshFriends = () => {
    if (userId) {
      NetworkClient.getFriends(userId).then((userData) => {
        setFriends(userData);
      });
    }
  };

  const filtredFriends = friends.filter((friend) => {
    return friend.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className={cx('header__input-wrapper')}>
      <input
        type='text'
        placeholder={intl.formatMessage({ id: 'searcher' })}
        className={cx('header__input')}
        onChange={(e) => setValue(e.target.value)}
      />
      <span
        className={cx('icon-search', 'header__input-search-icon')}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value ? setFriends(filtredFriends) : refreshFriends();
          setValue('');
          navigate(`/profile/${userId}/friends`);
        }}
      />
    </div>
  );
};

export default Searcher;

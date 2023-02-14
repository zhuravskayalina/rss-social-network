import classNames from 'classnames/bind';
import styles from './del-friend-button.module.scss';

const classStyles = classNames.bind(styles);

const DelFriendButton = () => {
  return (
    <button type='button' className={classStyles('del-button')}>
      Delete
    </button>
  );
};

export default DelFriendButton;

import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './del-friend-button.module.scss';

const classStyles = classNames.bind(styles);

const DelFriendButton = () => {
  return (
    <button type='button' className={classStyles('del-button')}>
      <FormattedMessage id='delete' />
    </button>
  );
};

export default DelFriendButton;

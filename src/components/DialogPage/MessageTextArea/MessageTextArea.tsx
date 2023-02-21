import { useIntl } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './MessageTextArea.module.scss';
import { ReactComponent as EmojiIcon } from '../../../assets/icons/emojiIcon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/icons/messageIcon.svg';

const cx = classNames.bind(styles);

const MessageTextArea = () => {
  const intl = useIntl();
  return (
    <div className={cx('dialog__write')}>
      <input
        type='text'
        name='input-message'
        id='input-message'
        placeholder={intl.formatMessage({ id: 'messageInput' })}
        className={cx('dialog__write-input')}
      />
      <div className={cx('dialog__buttons')}>
        <button type='button' className={cx('dialog__icon', 'emoji')}>
          <EmojiIcon />
        </button>

        <button type='button' className={cx('dialog__icon', 'message')}>
          <MessageIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageTextArea;

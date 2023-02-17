import classNames from 'classnames/bind';
import { MessageProps } from './MessageTypes';
import styles from './Message.module.scss';

const activeClass = 'friends-messages';

const cx = classNames.bind(styles);

const Message = ({ message: { text, isOwnMessage }, senderAvatar }: MessageProps) => {
  return (
    <div className={cx('dialog__message', { [activeClass]: isOwnMessage })}>
      {!isOwnMessage && (
        <img
          src={`${senderAvatar}`}
          alt='My friend`s avatar'
          className={cx('dialog__chat-avatar')}
        />
      )}
      <p className={cx('dialog__message-text', { [activeClass]: isOwnMessage })}>{`${text}`}</p>
    </div>
  );
};

export default Message;

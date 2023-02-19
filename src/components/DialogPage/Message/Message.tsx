import classNames from 'classnames/bind';
import { MessageProps } from './MessageTypes';
import styles from './Message.module.scss';
import noAvatarImg from '../../../assets/images/user-avatar.png';

const activeClass = 'friends-messages';

const cx = classNames.bind(styles);

const Message = ({ message: { text, time, isOwnMessage }, senderAvatar }: MessageProps) => {
  return (
    <div className={cx('dialog__message', { [activeClass]: isOwnMessage })}>
      <div className={cx('dialog__friends-text')}>
        {!isOwnMessage && (
          <div className={cx('dialog__chat-avatar')}>
            <div className={cx('dialog__chat-avatar-box')}>
              <img
                className={cx('dialog__chat-avatar-img')}
                src={`${senderAvatar}` || noAvatarImg}
                alt='My friend`s avatar'
              />
            </div>
          </div>
        )}
        <p className={cx('dialog__message-text', { [activeClass]: !isOwnMessage })}>{text}</p>
      </div>
      <p className={cx('dialog__message-time')}>{time}</p>
    </div>
  );
};

export default Message;

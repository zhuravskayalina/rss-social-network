import classNames from 'classnames/bind';
import styles from './DialogsPageWrapper.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import ChatFullBlock from '../ChatFullBlock/ChatFullBlock';
import { DialogPageProps } from './DialogsPageWrapperProps';

const cx = classNames.bind(styles);

const DialogPageWrapper = ({ user }: DialogPageProps) => {
  const chat = user.chat[0];
  return (
    <div className={cx('dialog__page')}>
      <ChatsList user={user} />
      <ChatFullBlock dialog={chat} />
    </div>
  );
};

export default DialogPageWrapper;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './user-info-block.module.scss';
import { ReactComponent as Arrow } from '../../../assets/icons/btn-arrow.svg';

const cx = classNames.bind(styles);

interface MessageSenderInfo {
  name: string;
  surname: string;
  profilePhoto: string;
}

interface UserInfoProps {
  senderId: string;
  sender: MessageSenderInfo;
}

const UserInfo = ({ sender, senderId }: UserInfoProps) => {
  return (
    <Link to={`/profile/${senderId}`} className={cx('user-info-link')}>
      <section className={cx('user-info')}>
        <div className={cx('image__container')}>
          <div className={cx('image__box')}>
            <img className={cx('image__img')} src={sender.profilePhoto} alt='profile' />
          </div>
        </div>
        <p className={cx('user-info__name')}>
          {sender.name} {sender.surname}
        </p>
        <div className={cx('arrow')}>
          <Arrow />
        </div>
      </section>
    </Link>
  );
};

export default UserInfo;

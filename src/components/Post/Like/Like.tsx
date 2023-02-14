import classNames from 'classnames/bind';
import styles from './like.module.scss';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like.svg';
import { LikeProps } from './types';

const cx = classNames.bind(styles);

const activeClass = 'like__icon_liked';

const Like = ({ likesCount, isUserLike, likePost }: LikeProps) => {
  return (
    <div className={cx('like')}>
      <button onClick={likePost} className={cx('like__btn')}>
        <LikeIcon className={cx('like__icon', { [activeClass]: isUserLike })} />
      </button>
      <span className={cx('like__counter')}>{likesCount}</span>
    </div>
  );
};

export default Like;

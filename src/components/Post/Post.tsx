import classNames from 'classnames/bind';
import styles from './post.module.scss';
import Like from './Like/Like';
import { PostProps } from './types';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { DateClient } from '../../DateClient/DateClient';
import anatarImg from '../../assets/images/user-avatar.png';

const cx = classNames.bind(styles);

const Post = ({
  isOwner,
  likesCount,
  post,
  isUserLike,
  likePost,
  deletePost,
  userName,
  userPhoto,
}: PostProps) => {
  const locale = localStorage.getItem('locale');
  const backImage = userPhoto || anatarImg;
  return (
    <div className={cx('post')}>
      <div className={cx('post__head')}>
        <div className={cx('post__photo')}>
          <div className={cx('post__photo-box')}>
            <img className={cx('post__photo-img')} src={backImage} alt='user' />
          </div>
        </div>
        <div className={cx('post__info')}>
          <p className={cx('post__name')}>{userName}</p>
          <p className={cx('post__date')}>{DateClient.formatPost(post.date)}</p>
        </div>
      </div>
      <div className={cx('post__content')}>{post.text}</div>
      <Like likesCount={likesCount} isUserLike={isUserLike} likePost={likePost} />
      <button
        className={cx('post__delete', { disabled: !isOwner })}
        onClick={deletePost}
        title={locale === 'ru' ? 'Удалить пост' : 'Delete post'}
      >
        <DeleteIcon className={cx('post__delete-icon')} />
      </button>
    </div>
  );
};

export default Post;

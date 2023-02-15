import classNames from 'classnames/bind';
import styles from './post.module.scss';
import Like from './Like/Like';
import { PostProps } from './types';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

const cx = classNames.bind(styles);

const Post = ({ likesCount, post, isUserLike, likePost, deletePost }: PostProps) => {
  return (
    <div className={cx('post')}>
      <div className={cx('post__head')}>
        <div className={cx('post__photo')} />
        <div className={cx('post__info')}>
          <p className={cx('post__name')}>{post.author}</p>
          <p className={cx('post__date')}>{post.date}</p>
        </div>
      </div>
      <div className={cx('post__content')}>{post.content}</div>
      <Like likesCount={likesCount} isUserLike={isUserLike} likePost={likePost} />
      <button className={cx('post__delete')} onClick={deletePost}>
        <DeleteIcon className={cx('post__delete-icon')} />
      </button>
    </div>
  );
};

export default Post;

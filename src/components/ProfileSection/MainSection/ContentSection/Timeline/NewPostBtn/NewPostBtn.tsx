import classNames from 'classnames/bind';
import styles from './new-post-btn.module.scss';
import { NewPostButtonProps } from './types';

const cx = classNames.bind(styles);

const NewPostButton = ({ onClick }: NewPostButtonProps) => {
  return (
    <button onClick={onClick} className={cx('button')}>
      <span className={cx('button__icon')}>+</span>
      New Post
    </button>
  );
};

export default NewPostButton;

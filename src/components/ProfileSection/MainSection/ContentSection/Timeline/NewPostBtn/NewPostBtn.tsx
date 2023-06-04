import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl/lib';
import styles from './new-post-btn.module.scss';
import { NewPostButtonProps } from './types';

const cx = classNames.bind(styles);

const NewPostButton = ({ onClick }: NewPostButtonProps) => {
  return (
    <button onClick={onClick} className={cx('button')}>
      <span className={cx('button__icon')}>+</span>
      <FormattedMessage id='newPost' />
    </button>
  );
};

export default NewPostButton;

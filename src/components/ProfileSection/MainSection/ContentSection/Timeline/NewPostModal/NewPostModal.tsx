import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './new-post.module.scss';
import { NewPostModalProps } from './types';

const cx = classNames.bind(styles);

const NewPostModal = ({ addPost }: NewPostModalProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNewPost = () => {
    addPost(inputValue);
  };

  return (
    <>
      <textarea
        className={cx('textarea')}
        placeholder='Write your post here...'
        maxLength={1000}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={handleAddNewPost} className={cx('add-btn')}>
        Add Post
      </button>
    </>
  );
};

export default NewPostModal;

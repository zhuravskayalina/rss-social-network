import classNames from 'classnames/bind';
import { ChangeEvent, useEffect, useState } from 'react';
import { PostItem } from 'src/types/interfaces';
import { NetworkClient } from 'src/NetworkClient/NetworkClient';
import { FormattedMessage } from 'react-intl';
import styles from './newsfeed.module.scss';
import { NewsFeedProps } from './types';
import Post from '../Post/Post';

const cx = classNames.bind(styles);

const NewsFeed = ({ userId }: NewsFeedProps) => {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [value, setValue] = useState<'new' | 'old' | 'name' | 'surname'>('new');

  useEffect(() => {
    NetworkClient.getPosts().then((postsData) => {
      setAllPosts(postsData);
    });
  }, []);

  const likePost = (id: string) => {
    const post = allPosts.find((postItem) => postItem.id === id);

    if (post) {
      post.likes = post.isLikedByUser ? post.likes - 1 : post.likes + 1;
      post.isLikedByUser = !post.isLikedByUser;

      NetworkClient.updatePost(id, post).then(() => {
        const temp = [...allPosts];
        setAllPosts(temp);
      });
    }
  };

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as 'new' | 'old' | 'name' | 'surname');
  };

  if (value === 'name' || value === 'surname') {
    allPosts.sort((a, b) => a.user[value].localeCompare(b.user[value]));
  } else if (value === 'old') {
    allPosts.sort((a, b) => +a.date - +b.date);
  } else if (value === 'new') {
    allPosts.sort((a, b) => +b.date - +a.date);
  }

  const deletePost = (postId: string) => {
    NetworkClient.deletePost(postId).then(() => {
      const newPosts = allPosts.filter(({ id }) => id !== postId);
      setAllPosts(newPosts);
    });
  };

  const renderPosts = () => {
    if (!allPosts.length) return <h2>No posts yet.</h2>;
    return allPosts.map((postItem) => {
      return (
        <Post
          isOwner={userId === postItem.user.id}
          post={postItem}
          likesCount={postItem.likes}
          isUserLike={postItem.isLikedByUser}
          key={postItem.id}
          likePost={() => likePost(postItem.id)}
          deletePost={() => (userId === postItem.user.id ? deletePost(postItem.id) : '')}
          userName={`${postItem.user ? postItem.user.name : 'Dog'} ${
            postItem.user ? postItem.user.surname : 'Patron'
          }`}
          userPhoto={postItem.user.profilePhoto}
        />
      );
    });
  };
  return (
    <div className={cx('newsfeed')}>
      <div className={cx('newsfeed__posts-filter')}>
        <div className={cx('filter')}>
          <span>
            <FormattedMessage id='sort' />
          </span>
          <select className={cx('filter-select')} value={value} onChange={changeSelect}>
            <option value='new'>
              <FormattedMessage id='new' />
            </option>
            <option value='old'>
              <FormattedMessage id='old' />
            </option>
            <option value='name'>
              <FormattedMessage id='name' />
            </option>
            <option value='surname'>
              <FormattedMessage id='surname' />
            </option>
          </select>
        </div>
      </div>
      {renderPosts()}
    </div>
  );
};

export default NewsFeed;

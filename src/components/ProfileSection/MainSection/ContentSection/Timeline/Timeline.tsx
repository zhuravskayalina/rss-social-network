import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './timeline.module.scss';
import Post from '../../../../Post/Post';
import NewPostBtn from './NewPostBtn/NewPostBtn';
import Modal from '../../../../Modal/Modal';
import NewPostModal from './NewPostModal/NewPostModal';
import { PostItem } from '../../../../../types/interfaces';

const cx = classNames.bind(styles);

const postsData: PostItem[] = [
  {
    author: 'Max Mayfield',
    date: '21.02.2023',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur aut
        deserunt dignissimos, dolorem eius ipsum modi necessitatibus odio officiis perspiciatis
        porro, possimus quaerat quis reiciendis veritatis voluptas voluptates!`,
    likesCount: 1,
    isLikedByUser: true,
  },
  {
    author: 'Max Mayfield',
    date: '20.01.2023',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur aut
        deserunt dignissimos, dolorem eius ipsum modi necessitatibus odio officiis perspiciatis
        porro, possimus quaerat quis reiciendis veritatis voluptas voluptates!`,
    likesCount: 0,
    isLikedByUser: false,
  },
  {
    author: 'Max Mayfield',
    date: '04.01.2023',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aspernatur aut
        deserunt dignissimos, dolorem eius ipsum modi necessitatibus odio officiis perspiciatis
        porro, possimus quaerat quis reiciendis veritatis voluptas voluptates!`,
    likesCount: 5,
    isLikedByUser: false,
  },
];

const Timeline = () => {
  const [isModalActive, setModalActive] = useState(false);
  const [posts, setPosts] = useState(postsData);

  const handleOpenModal = () => {
    setModalActive((prev) => !prev);
  };

  const likePost = (index: number) => {
    const post = posts[index];
    post.likesCount = post.isLikedByUser ? post.likesCount - 1 : post.likesCount + 1;
    post.isLikedByUser = !post.isLikedByUser;
    const temp = [...posts];
    setPosts(temp);
  };

  const deletePost = (index: number) => {
    const postsCopy = [...posts];
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  };

  const addPost = (content: string) => {
    const newPost = {
      author: 'Max Mayfield',
      date: '22.11.2023',
      content,
      likesCount: 0,
      isLikedByUser: false,
    };
    posts.push(newPost);
    setPosts(posts);
    setModalActive(false);
  };

  return (
    <>
      <NewPostBtn onClick={handleOpenModal} />
      <Modal isActive={isModalActive} setActive={setModalActive}>
        <NewPostModal addPost={addPost} />
      </Modal>
      <div className={cx('timeline')}>
        {posts
          .map((postItem, index) => {
            return (
              <Post
                post={postItem}
                likesCount={postItem.likesCount}
                isUserLike={postItem.isLikedByUser}
                key={postItem.date}
                likePost={() => likePost(index)}
                deletePost={() => deletePost(index)}
              />
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default Timeline;

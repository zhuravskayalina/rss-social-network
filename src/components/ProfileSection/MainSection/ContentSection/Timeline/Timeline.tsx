import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './timeline.module.scss';
import Post from '../../../../Post/Post';
import NewPostBtn from './NewPostBtn/NewPostBtn';
import Modal from '../../../../Modal/Modal';
import NewPostModal from './NewPostModal/NewPostModal';
import { NetworkClient } from '../../../../../NetworkClient/NetworkClient';
import { TimelineProps } from './types';

const cx = classNames.bind(styles);

// TODO: патчить пользователя и добавлять ему новый пост

const Timeline = ({ posts, setPosts, user }: TimelineProps) => {
  const [isModalActive, setModalActive] = useState(false);

  const handleOpenModal = () => {
    setModalActive((prev) => !prev);
  };

  const likePost = (id: string) => {
    const post = posts.find((postItem) => postItem.id === id);

    if (post) {
      post.likes = post.isLikedByUser ? post.likes - 1 : post.likes + 1;
      post.isLikedByUser = !post.isLikedByUser;

      NetworkClient.updatePost(id, post).then(() => {
        const temp = [...posts];
        setPosts(temp);
      });
    }
  };

  const deletePost = (id: string, index: number) => {
    NetworkClient.deletePost(id).then(() => {
      const postsCopy = [...posts];
      postsCopy.splice(index, 1);
      setPosts(postsCopy);
    });
  };

  const getUserPhoto = () => {
    if (user) return user.profilePhoto;
    return null;
  };

  const addPost = (text: string) => {
    const newPost = {
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
      },
      date: Date.now(),
      text,
      likes: 0,
      isLikedByUser: false,
    };

    NetworkClient.createPost(newPost)
      .then((post) => {
        posts.push(post);
        setPosts(posts);
      })
      .then(() => {
        setModalActive(false);
      });
  };

  const renderPosts = () => {
    if (!posts.length) return <h2>No posts yet.</h2>;
    return posts
      .map((postItem, index) => {
        return (
          <Post
            post={postItem}
            likesCount={postItem.likes}
            isUserLike={postItem.isLikedByUser}
            key={`hi${index}`}
            likePost={() => likePost(postItem.id)}
            deletePost={() => deletePost(postItem.id, index)}
            userName={`${postItem.user ? postItem.user.name : 'Dog'} ${
              postItem.user ? postItem.user.surname : 'Patron'
            }`}
            userPhoto={getUserPhoto()}
          />
        );
      })
      .reverse();
  };

  return (
    <>
      <NewPostBtn onClick={handleOpenModal} />
      <Modal isActive={isModalActive} setActive={setModalActive}>
        <NewPostModal addPost={addPost} />
      </Modal>
      <div className={cx('timeline')}>{renderPosts()}</div>
    </>
  );
};

export default Timeline;

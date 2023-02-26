import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './timeline.module.scss';
import Post from '../../../../Post/Post';
import NewPostBtn from './NewPostBtn/NewPostBtn';
import Modal from '../../../../Modal/Modal';
import NewPostModal from './NewPostModal/NewPostModal';
import { NetworkClient } from '../../../../../NetworkClient/NetworkClient';
import { TimelineProps } from './types';
import { PostItem } from '../../../../../types/interfaces';

const cx = classNames.bind(styles);

const Timeline = ({ user }: TimelineProps) => {
  const [isModalActive, setModalActive] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>(user.posts);

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

  const deletePost = (postId: string) => {
    NetworkClient.deletePost(postId).then(() => {
      const newPosts = posts.filter(({ id }) => id !== postId);
      setPosts(newPosts);
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
        profilePhoto: user.profilePhoto,
      },
      date: Date.now(),
      text,
      likes: 0,
      isLikedByUser: false,
    };

    NetworkClient.createPost(newPost).then((post: PostItem) => {
      setPosts((prev) => [...prev, post]);
      setModalActive(false);
    });
  };

  const renderPosts = () => {
    if (!posts.length) return <h2>No posts yet.</h2>;
    return posts
      .map((postItem) => {
        return (
          <Post
            isOwner={user.id === postItem.user.id}
            post={postItem}
            likesCount={postItem.likes}
            isUserLike={postItem.isLikedByUser}
            key={postItem.id}
            likePost={() => likePost(postItem.id)}
            deletePost={() => deletePost(postItem.id)}
            userName={`${postItem.user.name} ${postItem.user.surname}`}
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

import { PostItem } from '../../types/interfaces';

export interface PostProps {
  post: PostItem;
  likesCount: number;
  isUserLike: boolean;
  likePost: () => void;
  deletePost: () => void;
  userName: string;
  userPhoto: string | null;
}

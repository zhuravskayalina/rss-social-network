import { PostItem } from '../../types/interfaces';

export interface PostProps {
  isOwner: boolean;
  post: PostItem;
  likesCount: number;
  isUserLike: boolean;
  likePost: () => void;
  deletePost: () => void;
  userName: string;
  userPhoto: string | null | undefined;
}

import { PostItem, User } from '../../../../../types/interfaces';

export interface TimelineProps {
  posts: PostItem[];
  setPosts: React.Dispatch<React.SetStateAction<PostItem[]>>;
  user: User;
}

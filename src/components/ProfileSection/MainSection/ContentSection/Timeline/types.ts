import { PostItem, User } from '../../../../../types/interfaces';

export interface TimelineProps {
  posts: PostItem[];
  setPosts: (array: PostItem[]) => void;
  user: User;
}

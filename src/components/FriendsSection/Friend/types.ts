import { FriendType } from '../../../types/interfaces';

export interface FriendProps {
  friend: FriendType;
  deleteFriend: () => void;
  isOwnPage: boolean;
}

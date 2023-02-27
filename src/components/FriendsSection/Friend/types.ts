import { FriendType } from '../../../types/interfaces';

export interface FriendProps {
  friend: FriendType;
  deleteFriend: () => void;
  handleClickOnFriend: (is: string) => void;
  isOwnPage: boolean;
}

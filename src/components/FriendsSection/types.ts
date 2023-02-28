import { FriendType } from '../../types/interfaces';

export interface FriendSectionProps {
  userId: string;
  isOwnPage: boolean;
  friends: FriendType[];
  setFriends: React.Dispatch<React.SetStateAction<FriendType[]>>;
}

import { FriendType } from '../../types/interfaces';

export interface FriendSectionProps {
  friends: FriendType[];
  userId: string;
  setFriends: React.Dispatch<React.SetStateAction<FriendType[]>>;
}

import { FriendType } from 'src/types/interfaces';

export interface SearcherProps {
  userId: string | undefined;
  friends: FriendType[];
  setFriends: React.Dispatch<React.SetStateAction<FriendType[]>>;
}

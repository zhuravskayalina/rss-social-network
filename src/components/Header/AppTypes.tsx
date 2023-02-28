import { FriendType, User } from '../../types/interfaces';

export interface HeaderProps {
  currentLocale: string;
  handleChange: () => void;
  openAuthorization: () => void;
  isLoggedIn: boolean;
  logOut: () => void;
  user: User | undefined;
  friends: FriendType[];
  setFriends: React.Dispatch<React.SetStateAction<FriendType[]>>;
}

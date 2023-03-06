import { User } from '../../../../../types/interfaces';

export interface UserData {
  name: string;
  email: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
  hobbies: string;
  music: string;
  books: string;
  cinema: string;
}

export interface AboutProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isOwnPage: boolean;
}

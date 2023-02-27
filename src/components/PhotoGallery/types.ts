import { User } from '../../types/interfaces';

export interface PhotoGalleryProps {
  user: User;
  isOwnPage: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

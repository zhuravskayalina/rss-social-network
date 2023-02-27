import { User } from '../../types/interfaces';

export interface FotoGalleryProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

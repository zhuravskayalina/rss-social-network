import { User } from '../../types/interfaces';

export interface AuthorizationProps {
  isAuthModalActive: boolean;
  setAuthModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

import { User } from '../../../types/interfaces';

export interface SignInProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

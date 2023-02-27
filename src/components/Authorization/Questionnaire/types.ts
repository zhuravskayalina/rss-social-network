import { User } from '../../../types/interfaces';

export interface QuestionnaireProps {
  login: string;
  password: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  resetForms: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setAuthModalActive: (state: boolean) => void;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

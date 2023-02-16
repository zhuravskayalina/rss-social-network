import { User } from '../../../../../types/interfaces';

export interface UserData {
  name: string;
  email: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
  hobbies: string;
  'favourite music': string;
  'favourite books': string;
  'favourite movies': string;
}

export interface AboutProps {
  user: User;
}

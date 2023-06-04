import { User } from '../../types/interfaces';

export interface ProfileSectionProps {
  user: User;
  loggedUser: User;
  isOwnPage: boolean;
  handleClickMessage: (isHaveChat: boolean, friend: User) => void;
}

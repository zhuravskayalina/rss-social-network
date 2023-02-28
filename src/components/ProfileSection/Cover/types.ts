import { Chat, User } from '../../../types/interfaces';

export interface CoverProps {
  user: User;
  loggedUser: User;
  isOwnPage: boolean;
  handleClickMessage: (isHaveChat: boolean, friend: User) => void;
}

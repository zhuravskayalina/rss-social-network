import { Chat, User } from '../../types/interfaces';

export interface ProfileSectionProps {
  user: User;
  loggedUser: User;
  isOwnPage: boolean;
  handleClickMessage: (fakeChat: Chat) => void;
}

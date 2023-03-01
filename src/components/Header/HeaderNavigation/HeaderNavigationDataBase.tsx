import { FormattedMessage } from 'react-intl';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/headerMenuIcons/profileIcon.svg';
import { ReactComponent as FriendsIcon } from '../../../assets/icons/headerMenuIcons/friendsIcon.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/headerMenuIcons/chatIcon.svg';
import { ReactComponent as GalleryIcon } from '../../../assets/icons/headerMenuIcons/galleryIcon.svg';
import { ReactComponent as NewsfeedIcon } from '../../../assets/icons/headerMenuIcons/newsfeedIcon.svg';
import { ReactComponent as UsersIcon } from '../../../assets/icons/headerMenuIcons/usersIcon.svg';

export const navItems = [
  {
    icon: <ProfileIcon />,
    description: <FormattedMessage id='profile' />,
    link: '/profile',
    sublink: '',
    key: '1',
  },
  {
    icon: <UsersIcon />,
    description: <FormattedMessage id='friends' />,
    link: '/profile',
    sublink: '/friends',
    key: '2',
  },
  {
    icon: <ChatIcon />,
    description: <FormattedMessage id='messages' />,
    link: '/messages',
    sublink: '',
    key: '3',
  },
  {
    icon: <GalleryIcon />,
    description: <FormattedMessage id='gallery' />,
    link: '/profile',
    sublink: '/gallery',
    key: '4',
  },
  {
    icon: <NewsfeedIcon />,
    description: <FormattedMessage id='newsfeed' />,
    link: '/profile',
    sublink: '/newsfeed',
    key: '5',
  },
  {
    icon: <FriendsIcon />,
    description: <FormattedMessage id='users' />,
    link: '/users',
    sublink: '',
    key: '6',
  },
];

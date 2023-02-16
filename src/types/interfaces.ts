export interface PostItem {
  readonly id: string;
  user: {
    readonly id: string;
    name: string;
    surname: string;
  };
  date: string;
  text: string;
  likes: number;
  isLikedByUser: boolean;
}

export interface User {
  readonly id: string;
  login: string;
  password: string;
  profilePhoto: string | null;
  name: string;
  surname: string;
  location: string;
  socialMedia: SocialMediaLinks;
  email: string;
  info: {
    hobbies: string;
    music: string;
    cinema: string;
    books: string;
  };
  friends: string[];
  posts: PostItem[];
  photos: string[];
  chat: Chat[];
}

interface SocialMediaLinks {
  instagram: string | null;
  twitter: string | null;
  linkedIn: string | null;
}

interface ChatHistory {
  text: string;
  time: string;
  isOwnMessage: boolean;
}

interface Chat {
  readonly senderId: string;
  senderInfo: {
    name: string;
    surname: string;
    profilePhoto: string;
  };
  history: ChatHistory[];
}

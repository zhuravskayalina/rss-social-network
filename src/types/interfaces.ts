export interface PostItem {
  id: string;
  userId?: string;
  user?: {
    id: string;
    name: string;
    surname: string;
  };
  date: string;
  content: string;
  likes: number;
  isLikedByUser: boolean;
}

export interface User {
  id: string;
  profilePhoto: string | null;
  name: string;
  surname: string;
  location: string;
  socialMedia?: SocialMediaLinks;
  email?: string;
  info?: {
    hobbies: string;
    music: string;
    cinema: string;
    books: string;
  };
  friends?: string[];
  posts: PostItem[];
  photos?: [];
  chat?: Chat[];
}

interface SocialMediaLinks {
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
}

interface ChatHistory {
  from: string;
  time: string;
  content: string;
}

interface Chat {
  userId: string;
  history: ChatHistory[];
}

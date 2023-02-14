export interface User {
  name: string;
  surname: string;
  location: string;
  profilePhoto: string;
}

export interface PostItem {
  author: string;
  date: string;
  content: string;
  likesCount: number;
  isLikedByUser: boolean;
}

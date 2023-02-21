import { UserData } from '../types';

export interface InfoBlockProps {
  data: Partial<UserData>;
  heading: string;
  changeField: (field: string, content: string, initialContent: string) => void;
}

export interface InfoItemProps {
  sectionName: string;
  sectionContent: string;
  changeField: (field: string, content: string, initialContent: string) => void;
  isOwnPage: boolean;
}

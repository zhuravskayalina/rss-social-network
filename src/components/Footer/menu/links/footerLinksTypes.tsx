export interface MenuSectionInterface {
  title: JSX.Element;
  link: string;
  id: number;
}

export interface MenuSectionProps {
  links: Array<MenuSectionInterface>;
  blockClass: string;
  itemClass: string;
}

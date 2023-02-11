export interface MenuSectionInterface {
  title: string;
  link: string;
}

export interface MenuSectionProps {
  links: Array<MenuSectionInterface>;
  blockClass: string;
  itemClass: string;
}

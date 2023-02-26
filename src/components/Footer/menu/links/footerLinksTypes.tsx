export interface MenuSectionInterface {
  title: JSX.Element;
  link: string;
}

export interface MenuSectionProps {
  links: Array<MenuSectionInterface>;
  blockClass: string;
  itemClass: string;
}

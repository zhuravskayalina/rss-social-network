import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import { MenuSectionInterface, MenuSectionProps } from './footerLinksTypes';

const classStyles = classNames.bind(styles);

const MenuLinksSection = ({ links, blockClass, itemClass }: MenuSectionProps) => {
  return (
    <ul className={classStyles(`${blockClass}`)}>
      {links.map((sectionUnit: MenuSectionInterface, idx: number) => (
        <li key={`footer-${sectionUnit.title}`}>
          <a href={`${sectionUnit.link}`} className={classStyles(`${itemClass}`)}>
            {`${sectionUnit.title}`}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinksSection;

import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import { MenuSectionInterface, MenuSectionProps } from './footerLinksTypes';

const cx = classNames.bind(styles);

const MenuLinksSection = ({ links, blockClass, itemClass }: MenuSectionProps) => {
  return (
    <ul className={cx(`${blockClass}`)}>
      {links.map((sectionUnit: MenuSectionInterface) => (
        <li key={`footer-${sectionUnit.id}`}>
          <a href={`${sectionUnit.link}`} className={cx(`${itemClass}`)}>
            {sectionUnit.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinksSection;

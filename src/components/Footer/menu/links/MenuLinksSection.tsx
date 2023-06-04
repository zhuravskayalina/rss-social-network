import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../Footer.module.scss';
import { MenuSectionInterface, MenuSectionProps } from './footerLinksTypes';

const cx = classNames.bind(styles);

const MenuLinksSection = ({ links, blockClass, itemClass }: MenuSectionProps) => {
  return (
    <ul className={cx(`${blockClass}`)}>
      {links.map((sectionUnit: MenuSectionInterface) => (
        <li key={`footer-${sectionUnit.id}`}>
          <Link to={`${sectionUnit.link}`} className={cx(`${itemClass}`)}>
            {sectionUnit.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinksSection;

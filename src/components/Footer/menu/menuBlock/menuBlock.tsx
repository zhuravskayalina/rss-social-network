import classNames from 'classnames/bind';
import styles from '../../Footer.module.scss';
import MenuLinksSection from '../links/MenuLinksSection';
import { MenuBlockInterface } from './menuBlockType';
import decorIcon from '../../../../assets/icons/decorLine.svg';

const cx = classNames.bind(styles);

const MenuBlock = ({
  header,
  headerStyle,
  decorIconStyle,
  links,
  blockClass,
  itemClass,
}: MenuBlockInterface) => {
  return (
    <div>
      <p className={cx(`${headerStyle}`)}>{`${header}`}</p>
      <img src={decorIcon} alt='decor' className={cx(`${decorIconStyle}`)} />
      <MenuLinksSection links={links} blockClass={blockClass} itemClass={itemClass} />
    </div>
  );
};

export default MenuBlock;

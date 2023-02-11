import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logoIcon from '../../assets/icons/logoBlack.svg';
import { importantLinks, communityLinks, developersLinks } from './menu/links/footerLinks';
import MenuBlock from './menu/menuBlock/menuBlock';

const classStyles = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={classStyles('footer')}>
      <div className={classStyles('footer__menu-grid')}>
        <div>
          <img src={logoIcon} alt='Owl' className={classStyles('footer__logo-icon')} />
          <p className={classStyles('footer__text')}>
            Social media for life. Over a billion people already on Owl. Be one of them.
          </p>
        </div>
        <MenuBlock
          header='Important Links'
          headerStyle='footer__blocks-names'
          decorIconStyle='footer__decor-line'
          links={importantLinks}
          blockClass='footer__block-content'
          itemClass='footer__links'
        />

        <MenuBlock
          header='Community'
          headerStyle='footer__blocks-names'
          decorIconStyle='footer__decor-line'
          links={communityLinks}
          blockClass='footer__block-content'
          itemClass='footer__links'
        />

        <MenuBlock
          header='Developers'
          headerStyle='footer__blocks-names'
          decorIconStyle='footer__decor-line'
          links={developersLinks}
          blockClass='footer__block-content'
          itemClass='footer__links'
        />
      </div>
      <div className={classStyles('footer__copyright')}>
        <p> Copyright © 2023 </p>
      </div>
    </div>
  );
};

export default Footer;

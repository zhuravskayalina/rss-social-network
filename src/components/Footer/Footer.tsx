import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logoIcon from '../../assets/icons/logoBlack.svg';
import { importantLinks, communityLinks, developersLinks } from './menu/links/footerLinks';
import MenuBlock from './menu/menuBlock/menuBlock';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <div className={cx('footer__menu-grid')}>
        <div>
          <img src={logoIcon} alt='Owl' className={cx('footer__logo-icon')} />
          <p className={cx('footer__text')}>
            <FormattedMessage id='aboutOWL' />
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
      <div className={cx('footer__copyright')}>
        <p> Copyright © 2023 </p>
      </div>
    </div>
  );
};

export default Footer;

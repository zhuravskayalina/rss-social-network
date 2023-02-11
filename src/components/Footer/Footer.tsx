import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logoIcon from '../../assets/icons/logoBlack.svg';

const classStyles = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={classStyles('footer')}>
      <div className={classStyles('footer__menu-grid')}>
        <img src={logoIcon} alt='Owl' className={classStyles('footer__logo-icon')} />
        <p className={classStyles('footer__blocks-names')}>Important Links</p>
        <p className={classStyles('footer__blocks-names')}>Community</p>
        <p className={classStyles('footer__blocks-names')}>Developers</p>
        <p className={classStyles('footer__text')}>
          Social media for life. Over a billion people already on Owl. Be one of them.
        </p>

        <div className={classStyles('footer__block-content')}>
          <a href='#!' className={classStyles('footer__links')}>
            About Us
          </a>
          <a href='#!' className={classStyles('footer__links')}>
            Contact Us
          </a>
          <a href='#!' className={classStyles('footer__links')}>
            Help
          </a>
        </div>

        <div className={classStyles('footer__block-content')}>
          <a href='#!' className={classStyles('footer__links')}>
            Newsfeed
          </a>
          <a href='#!' className={classStyles('footer__links')}>
            Groups
          </a>
          <a href='#!' className={classStyles('footer__links')}>
            Friends
          </a>
          <a href='#!' className={classStyles('footer__links')}>
            Forums
          </a>
        </div>

        <div className={classStyles('footer__block-content')}>
          <a href='https://github.com/zhuravskayalina' className={classStyles('footer__links')}>
            Anhelina Zhurauskaya
          </a>
          <a href='https://github.com/esmolina' className={classStyles('footer__links')}>
            Elena Smolina
          </a>
          <a href='https://github.com/pavel-troinich' className={classStyles('footer__links')}>
            Pavel Troinich
          </a>
        </div>
      </div>

      <div className={classStyles('footer__copyright')}>
        <p> Copyright © 2023 </p>
      </div>
    </div>
  );
};

export default Footer;

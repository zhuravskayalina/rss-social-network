import classNames from 'classnames/bind';
import styles from './advert-section.module.scss';
import Banner from './Banner/Banner';
import snowBanner from '../../../../assets/images/snow-banner.png';

const cx = classNames.bind(styles);

const snowboardBanner = {
  className: 'banners-section__banner',
  heading: 'Snowboarding Shop',
  subHeading: 'Snowboards, boots, googles',
  buttonContent: 'Go',
  imgUrl: snowBanner,
  url: 'https://zhuravskayalina-online-store.netlify.app',
};

const AdvertSection = () => {
  return (
    <div className={cx('banners-section')}>
      <Banner data={snowboardBanner} />
    </div>
  );
};

export default AdvertSection;

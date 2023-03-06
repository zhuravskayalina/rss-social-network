import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './ad-banner.scss';
import arrowImg from '../../../../../assets/icons/btn-arrow.svg';

const cx = classNames.bind(styles);

interface BannerProps {
  data: {
    className: string;
    heading: string;
    subHeading: string;
    buttonContent: string;
    imgUrl: string;
    url: string;
  };
}

const Banner = ({ data }: BannerProps) => {
  const { className, heading, subHeading, buttonContent, imgUrl, url } = data;
  return (
    <div className={cx(className, 'banner')} style={{ backgroundImage: `url(${imgUrl})` }}>
      <h3 className={cx('banner__heading')}>{heading}</h3>
      <p className={cx('banner__subheading')}>{subHeading}</p>
      <Link to={url} className={cx('banner__link')}>
        <FormattedMessage id={buttonContent} />
        <img className={cx('banner__arrow')} src={arrowImg} alt='go' />
      </Link>
    </div>
  );
};

export default Banner;

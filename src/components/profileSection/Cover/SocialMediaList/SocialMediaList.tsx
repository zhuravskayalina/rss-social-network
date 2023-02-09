import classNames from 'classnames/bind';
import styles from './soc-media-list.module.scss';
import { ExternalResources } from '../enums';
import instagramIcon from '../../../../assets/icons/instagram.svg';
import twitterIcon from '../../../../assets/icons/twitter.svg';
import linkedinIcon from '../../../../assets/icons/linkedin.svg';
import { ExternalLink } from './types';
import MediaLink from './MediaLink/MediaLink';

const cx = classNames.bind(styles);

const SocialMediaList = () => {
  const resources: ExternalLink[] = [
    {
      title: 'twitter',
      url: ExternalResources.Twitter,
      icon: twitterIcon,
    },
    {
      title: 'instagram',
      url: ExternalResources.Instagram,
      icon: instagramIcon,
    },
    {
      title: 'linkedIn',
      url: ExternalResources.LinkedIn,
      icon: linkedinIcon,
    },
  ];

  return (
    <ul className={cx('soc-media')}>
      {resources.map(({ title, url, icon }) => (
        <MediaLink title={title} url={url} icon={icon} key={title} />
      ))}
    </ul>
  );
};

export default SocialMediaList;

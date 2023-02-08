import classNames from 'classnames/bind';
import styles from './cover.module.scss';

import twitterIcon from '../../../assets/icons/twitter.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';

import profileImg from '../../../assets/images/max.jpeg';

const cx = classNames.bind(styles);

const Cover = () => {
  return (
    <div className={cx('cover')}>
      <div className={cx('cover__gradient')}>
        <div className={cx('cover__info-block')}>
          <img className={cx('cover__img')} src={profileImg} alt='profile' />
          <div className={cx('cover-info')}>
            <p className={cx('cover-info__name')}>Max Mayfield</p>
            <p className={cx('cover-info__location')}>Hawkins, Indiana</p>
            <ul className={cx('soc-media')}>
              <li className={cx('soc-media__item', 'soc-media__item_inst')}>
                <a className={cx('soc-media__link')} href='https://www.instagram.com'>
                  <img
                    className={cx('soc-media__icon', 'soc-media__icon__inst')}
                    src={instagramIcon}
                    alt='instagram'
                  />
                </a>
              </li>
              <li className={cx('soc-media__item', 'soc-media__item_twitter')}>
                <a className={cx('soc-media__link')} href='https://www.twitter.com'>
                  <img className={cx('soc-media__icon')} src={twitterIcon} alt='twitter' />
                </a>
              </li>
              <li className={cx('soc-media__item', 'soc-media__item_linkedin')}>
                <a className={cx('soc-media__link')} href='https://www.linkedin.com/'>
                  <img className={cx('soc-media__icon')} src={linkedinIcon} alt='linkedIn' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

import classNames from 'classnames/bind';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './photoGallery.module.scss';
import { PhotoGalleryProps } from './types';

const cx = classNames.bind(styles);

const PhotoGallery = ({ user, isOwnPage }: PhotoGalleryProps) => {
  const images: JSX.Element[] = user.photos.map((item) => (
    <a href={item} key={item}>
      <img className={cx('gallery__img')} src={item} alt='foto' />
    </a>
  ));

  return (
    <div className={cx('gallery')}>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images}
      </LightGallery>
    </div>
  );
};

export default PhotoGallery;

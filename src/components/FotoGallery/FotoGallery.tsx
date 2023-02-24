import classNames from 'classnames/bind';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './fotoGallery.module.scss';
import { FotoGalleryProps } from './types';

const cx = classNames.bind(styles);

const FotoGallery = ({ photos }: FotoGalleryProps) => {
  const images: JSX.Element[] = photos.map((item) => (
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

export default FotoGallery;

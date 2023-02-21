import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import Carousel from 'react-gallery-carousel';
import Carousel from 'better-react-carousel';
import styles from './fotoGallery.module.scss';
import { FotoGalleryProps } from './types';
import 'react-gallery-carousel/dist/index.css';

const cx = classNames.bind(styles);

const FotoGallery = ({ foto }: FotoGalleryProps) => {
  const openFoto = () => {
    console.log('click');
  };

  const fotoEl = [...foto].map((item, i) => (
    <Link to='/gallery/foto' key={i}>
      <div className={cx('gallery__item')} onClick={openFoto}>
        <img src={item} alt='Foto' />
      </div>
    </Link>
  ));
  // const images = [...foto].map((item) => ({
  //   src: `${item}`,
  // }));

  // const images = [...foto].map((item) => ({
  //   <Carousel.Item><img width='100%' src=${item} /></Carousel.Item>`
  // }));
  // const fotoEl = [...foto].map((item) => (
  //   <Carousel.Item key={item}>
  //     <div className={cx('gallery__item')}>
  //       <img style={{ objectFit: 'cover' }} width='100%' src={item} alt='' />
  //     </div>
  //   </Carousel.Item>
  // ));

  return (
    <div className={cx('gallery')}>
      {fotoEl}
      {/* <Carousel cols={4} rows={2} gap={1} loop>
        {fotoEl}
      </Carousel> */}
    </div>
  );
};

export default FotoGallery;

import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';
import styles from './content-section.module.scss';
import Timeline from './Timeline/Timeline';

const cx = classNames.bind(styles);

const ContentSection = () => {
  return (
    <div className={cx('content-section')}>
      <Routes>
        <Route path='timeline' element={<Timeline />} />
        <Route path='about' element={<div>About</div>} />
        <Route path='friends' element={<div>Friends</div>} />
        <Route path='gallery' element={<div>Gallery</div>} />
      </Routes>
    </div>
  );
};

export default ContentSection;

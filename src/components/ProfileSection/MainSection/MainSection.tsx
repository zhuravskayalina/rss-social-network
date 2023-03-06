import classNames from 'classnames/bind';
import styles from './main-section.module.scss';
import ContentSection from './ContentSection/ContentSection';
import AdvertSection from './AdvertSection/AdvertSection';

const cx = classNames.bind(styles);

const MainSection = () => {
  return (
    <div className={cx('main')}>
      <ContentSection />
      <AdvertSection />
    </div>
  );
};

export default MainSection;

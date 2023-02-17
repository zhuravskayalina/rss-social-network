import classNames from 'classnames/bind';
import styles from './info-block.module.scss';
import { ReactComponent as DecorLine } from '../../../../../../assets/icons/decorLine.svg';
import InfoItem from '../InfoItem/InfoItem';
import { InfoBlockProps } from './types';

const cx = classNames.bind(styles);

const InfoBlock = ({ data, heading }: InfoBlockProps) => {
  return (
    <div className={cx('info-block')}>
      <h3 className={cx('info-block__heading')}>{heading}</h3>
      <DecorLine />
      <ul className={cx('info-block__list')}>
        {Object.entries(data).map(([key, value]) => {
          return <InfoItem sectionName={key} sectionContent={value} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default InfoBlock;

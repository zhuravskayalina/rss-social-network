import classNames from 'classnames/bind';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './info-block.module.scss';
import { ReactComponent as DecorLine } from '../../../../../../assets/icons/decorLine.svg';
import InfoItem from '../InfoItem/InfoItem';
import { InfoBlockProps } from './types';

const cx = classNames.bind(styles);

const InfoBlock = ({ data, heading, changeField, isOwnPage }: InfoBlockProps) => {
  const intl = useIntl();

  return (
    <div className={cx('info-block')}>
      <h3 className={cx('info-block__heading')}>
        <FormattedMessage id={heading} />
      </h3>
      <DecorLine />
      <ul className={cx('info-block__list')}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <InfoItem
              sectionName={intl.formatMessage({ id: key })}
              sectionContent={value}
              key={key}
              changeField={changeField}
              isOwnPage={isOwnPage}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default InfoBlock;

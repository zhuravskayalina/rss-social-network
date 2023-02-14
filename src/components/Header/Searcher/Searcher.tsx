import { useIntl } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './searcher.module.scss';

const cx = classNames.bind(styles);

const Searcher = () => {
  const intl = useIntl();
  return (
    <div className={cx('header__input-wrapper')}>
      <input
        type='text'
        placeholder={intl.formatMessage({ id: 'searcher' })}
        className={cx('header__input')}
      />
      <span className={cx('icon-search', 'header__input-search-icon')} />
    </div>
  );
};

export default Searcher;

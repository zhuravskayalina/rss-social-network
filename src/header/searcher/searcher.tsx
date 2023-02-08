import classNames from 'classnames/bind';
import styles from '../../index.scss';

const classStyles = classNames.bind(styles);

const Searcher = () => {
  return (
    <div className={classStyles('header__input-wrapper')}>
      <input type='text' placeholder='Search here...' className={classStyles('header__input')} />
      <span className={classStyles('icon-search', 'header__input-search-icon')} />
    </div>
  );
};

export default Searcher;

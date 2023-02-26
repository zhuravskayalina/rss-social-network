import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './input-file.module.scss';
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg';
import { InputFileProps } from './types';

const cx = classNames.bind(styles);

const InputFile = ({ onChange, src, handleDrop, handleDragEmpty }: InputFileProps) => {
  return (
    <div className={cx('input-file-wrapper')}>
      <div className={cx('input__wrapper')}>
        <input
          name='file'
          type='file'
          id='input__file'
          className={cx('input', 'input__file')}
          multiple
          onChange={onChange}
        />
        <label htmlFor='input__file' className={cx('input__label')}>
          <div className={cx('input__file-icon-wrapper')}>
            <UploadIcon className={cx('input__file-icon')} />
          </div>
          <p className={cx('input__file-button-text')}>
            <FormattedMessage id='choose photo' />
          </p>
        </label>
      </div>
      <div
        className={cx('drop-box')}
        onDrop={handleDrop}
        onDragEnter={handleDragEmpty}
        onDragOver={handleDragEmpty}
      >
        <img src={src} alt='avatar' className={cx('input__img-preview')} />
      </div>
    </div>
  );
};

export default InputFile;

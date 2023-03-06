import classNames from 'classnames/bind';
import styles from './edit-button.module.scss';
import { ReactComponent as SaveIcon } from '../../../../../../../assets/icons/save.svg';
import { ReactComponent as EditIcon } from '../../../../../../../assets/icons/edit.svg';
import { EditButtonProps } from './types';

const cx = classNames.bind(styles);

const EditButton = ({ isEdit, handleSaveChanges, handleEdit }: EditButtonProps) => {
  return (
    <button onClick={isEdit ? handleSaveChanges : handleEdit} className={cx('save-btn')}>
      {isEdit ? <SaveIcon className={cx('save-icon')} /> : <EditIcon className={cx('edit-icon')} />}
    </button>
  );
};

export default EditButton;

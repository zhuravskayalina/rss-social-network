import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './info-item.module.scss';
import { InfoItemProps } from './types';
import EditButton from './EditButton/EditButton';

const cx = classNames.bind(styles);

const InfoItem = ({ sectionName, sectionContent, changeField, isOwnPage }: InfoItemProps) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(sectionContent);
  const [content, setContent] = useState(sectionContent);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSaveChanges = () => {
    setEdit(false);
    setContent(inputValue);

    changeField(sectionName, inputValue, sectionContent);
  };

  return (
    <li className={cx('item', { item_edit: isEdit })}>
      <span className={cx('item__name')}>{sectionName}</span>
      {isEdit ? (
        <input
          type='text'
          onChange={handleInputChange}
          value={inputValue}
          className={cx('edit-input')}
        />
      ) : (
        <span className={cx('item__content')}>{content}</span>
      )}
      {isOwnPage && (
        <EditButton isEdit={isEdit} handleSaveChanges={handleSaveChanges} handleEdit={handleEdit} />
      )}
    </li>
  );
};

export default InfoItem;

import classNames from 'classnames/bind';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import React, { useState } from 'react';
import styles from './fotoGallery.module.scss';
import { PhotoGalleryProps } from './types';
import InputFile from '../InputFile/InputFile';
import uploadImg from '../../assets/images/upload-png.png';
import { NetworkClient } from '../../NetworkClient/NetworkClient';

const cx = classNames.bind(styles);

const PhotoGallery = ({ user, setUser, isOwnPage }: PhotoGalleryProps) => {
  const images: JSX.Element[] = user.photos.map((item) => (
    <a href={item} key={item}>
      <img className={cx('gallery__img')} src={item} alt='foto' />
    </a>
  ));

  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setAvatarUrl(fileReader.result as string);
  };

  const handleUploadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      if (file.size > 40000) {
        // eslint-disable-next-line no-alert
        alert('File size is too big! Please select another one.');
      } else {
        fileReader.readAsDataURL(file);
      }
    }
  };

  const handleDragEmpty = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLImageElement>) => {
    handleDragEmpty(event);
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleUpdateGallery = () => {
    const userCopy = { ...user };
    userCopy.photos.push(avatarUrl);

    NetworkClient.updateUser(user.id, userCopy).then((userData) => {
      setUser(userData);
    });
    setAvatarUrl('');
  };

  return (
    <div className={cx('gallery')}>
      {isOwnPage && (
        <div className={cx('upload-box')}>
          <InputFile
            onChange={handleUploadPhoto}
            src={avatarUrl || uploadImg}
            handleDragEmpty={handleDragEmpty}
            handleDrop={handleDrop}
            className='input-file-wrapper__gallery'
          />
          <button disabled={!avatarUrl} onClick={handleUpdateGallery} className={cx('save-btn')}>
            Save
          </button>
        </div>
      )}
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images}
      </LightGallery>
    </div>
  );
};

export default PhotoGallery;

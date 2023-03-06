import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './modal.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ModalProps } from './types';

const cx = classNames.bind(styles);

const Modal = ({ isActive, setActive, className, children }: ModalProps) => {
  useEffect(() =>
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isActive) {
        setActive(false);
      }
    }),
  );

  return (
    <div className={cx('modal', { modal_open: isActive })} onClick={() => setActive(false)}>
      <div className={cx('modal__content', className)} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={cx('modal__close-icon')} onClick={() => setActive(false)}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Modal;

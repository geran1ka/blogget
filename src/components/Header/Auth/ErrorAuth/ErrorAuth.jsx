import React, {useEffect, useRef} from 'react';
import style from './ErrorAuth.module.css';
import ReactDOM from 'react-dom';
import {ReactComponent as CloseIcon} from './img/close.svg';


export const ErrorAuth = ({text, closePopup}) => {
  const overlayRef = useRef(null);
  const hadleClick = (e) => {
    const target = e.target;
    if (
      target === overlayRef.current ||
        target.closest('svg') ||
        e.keyCode === 27
    ) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', hadleClick);
    document.addEventListener('click', hadleClick);
    return () => {
      document.removeEventListener('click', hadleClick);
      document.removeEventListener('keydown', hadleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.popup} ref={overlayRef}>
      <p className={style.content}>Lorem LoremLoremLoremLoremLorem
      LoremLoremLorem LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem LoremLorem </p>
      <button className={style.close}><CloseIcon /></button>
    </div>,
    document.getElementById('popup-root'),
  );
};

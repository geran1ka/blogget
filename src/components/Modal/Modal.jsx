import React, {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [{author, title}] = useCommentsData(id);

  // const {} = comment[0].data.children[0].data;
  const hadleClick = (e) => {
    const target = e.target;

    if (
      target === overlayRef.current ||
        target.closest('button') ||
        e.keyCode === 27
    ) {
      closeModal();
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
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {id}
          </Markdown>
        </div>
        <p className={style.author}>{author}</p>
        <button className={style.button}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};

import React from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

export const Modal = ({title, author, markdown}) => ReactDOM.createPortal(
  <div className={style.overlay}>
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
          {markdown}
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

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
};

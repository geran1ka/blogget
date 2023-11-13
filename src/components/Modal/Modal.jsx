import React from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';

export const Modal = ({title, author, markdown}) => {
  console.log(markdown);
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>{markdown}</div>
        <p className={style.author}>{author}</p>
        <button className={style.button}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
};

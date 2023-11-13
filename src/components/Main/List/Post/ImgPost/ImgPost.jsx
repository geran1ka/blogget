import React from 'react';
import style from './ImgPost.module.css';
import PropTypes from 'prop-types';

export const ImgPost = ({thumbnail, title}) => (
  <img className={style.img} src={thumbnail} alt={title} />
);

ImgPost.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

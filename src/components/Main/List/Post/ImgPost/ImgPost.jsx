import React from 'react';
import style from './ImgPost.module.css';
import PropTypes from 'prop-types';

export const ImgPost = ({thumbnail}) => (
  <img className={style.img} src={thumbnail} alt="" />
);

ImgPost.propTypes = {
  thumbnail: PropTypes.img,
};

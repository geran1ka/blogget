import React from 'react';
import style from './BtnDel.module.css';
import {ReactComponent as Delete} from './img/delete.svg';

export const BtnDel = () => (
  <button className={style.delete} >
    <Delete />
  </button>
);

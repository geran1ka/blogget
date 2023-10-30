import React from 'react';
import style from './Auth.module.css';
import login from './img/login.svg';

export const Auth = ({auth}) => {
  return (
    <button className={style.button}>
      {auth ? auth : 
        <img className={style.svg} src={login} alt='Авторизация' />
      }
      
    </button>
  )
}
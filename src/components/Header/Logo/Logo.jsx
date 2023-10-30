import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = props => (
  <a className={style.link} href='/'>
    <img className={style.logo} src={logo} alt='Логотип Blogget' />
  </a>
);

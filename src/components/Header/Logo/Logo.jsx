import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';
import {Link} from 'react-router-dom';

export const Logo = props => (
  <Link className={style.link} to='/category/rising'>
    <img className={style.logo} src={logo} alt='Логотип Blogget' />
  </Link>
);

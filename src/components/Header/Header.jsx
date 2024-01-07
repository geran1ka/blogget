import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';
import {useSelector} from 'react-redux';


export const Header = () => {
  const page = useSelector(state => state.posts.page);
  const getName = (page = window.location.pathname.slice(1)) => {
    let text = '';
    switch (page) {
      case 'top':
        text = 'Топ';
        break;
      case 'best':
        text = 'Лучшие';
        break;
      case 'hot':
        text = 'Горячие';
        break;
      case 'auth':
        text = 'Авторизация';
        break;
      case 'search':
        text = 'Поиск';
        break;
      default:
        text = 'Главная';
    }
    return text;
  };

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text={getName(page)}/>
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};

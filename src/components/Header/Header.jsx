import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';
import {useSelector} from 'react-redux';


export const Header = () => {
  console.log(window.location.pathname.slice(1));
  const page = useSelector(state => state.posts.page);
  const getName = (page) => {
    console.log(page);
    let text = '';
    switch (page) {
      case 'rising':
        text = 'Главная';
        break;
      case 'top':
        text = 'Топ';
        break;
      case 'best':
        text = 'Лучшие';
        break;
      case 'hot':
        text = 'Горячие';
        break;
      default:
        text = 'Старт';
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

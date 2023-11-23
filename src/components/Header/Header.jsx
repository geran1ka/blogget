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
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text={text}/>
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};


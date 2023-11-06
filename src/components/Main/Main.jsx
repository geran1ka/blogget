import React from 'react';
import style from './Main.module.css';
import Layuot from '../Layout';
import Tabs from './Tabs';
import List from './List';

export const Main = props => (
  <div className={style.main}>
    <Layuot>
      <Tabs />
      <List />
    </Layuot>
  </div>
);

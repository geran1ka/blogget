import React from 'react';
import style from './Main.module.css';
import Layuot from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';

export const Main = props => (
  <div className={style.main}>
    <Layuot>
      <Tabs />
      <Routes>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layuot>
  </div>
);

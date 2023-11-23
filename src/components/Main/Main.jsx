import React from 'react';
import style from './Main.module.css';
import Layuot from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import Start from '../Start';
import {Error} from '../Error/Error';

export const Main = props => (
  <div className={style.main}>
    <Layuot>
      <Tabs />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Layuot>
  </div>
);

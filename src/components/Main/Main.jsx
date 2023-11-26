import React from 'react';
import style from './Main.module.css';
import Layuot from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {Start} from '../Start/Start';
import {NotFound} from '../NotFound/NotFound';
import Authorization from '../Authorization';

export const Main = () => (
  <div className={style.main}>
    <Layuot>
      <Tabs />
      <Routes>
        <Route index element={<Start />} />
        <Route path='auth' element={<Authorization />} />
        <Route path='category/:page' element={<List />} errorElement={<NotFound />}>
          <Route path='post/:id' element={<Modal /> }/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layuot>
  </div>
);

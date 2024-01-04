import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsync = createAsyncThunk(
  'posts/fetchPosts',
  (newPage, {getState, dispatch}) => {
    let page = getState().posts.page;
    if (newPage) {
      page = newPage;
    }

    const token = getState().token.token;
    const after = getState().posts.after;
    // const loading = getState().posts.loading;
    const isLast = getState().posts.isLast;

    if (!token || isLast) return;
    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => data.data)
      .catch((error) => ({error: error.toString()}));
  });

export const searchRequestAsync = createAsyncThunk(
  'fetch/search',
  (search, {getState}) => {
    console.log('search: ', search);

    const token = getState().token.token;
    // const after = getState().posts.after;
    // const isLast = getState().search.isLast;
    console.log('a');
    if (!token || !search) return;
    console.log('ax');
    return axios(`${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => data.data)
      .catch((error) => ({error: error.toString()}));
  }
);

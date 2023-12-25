import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsync2 = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage(page));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;

  if (!token || loading || isLast) return;
  dispatch(postsSlice.actions.postRequest());
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postsSlice.actions.postRequestSuccessAfter(data.data));
      } else {
        dispatch(postsSlice.actions.postRequestSuccess(data.data));
      }
    })
    .catch((error) => {
      console.error(error);
      dispatch(postsSlice.actions.postRequestError(error.toString()));
    });
};

export const postRequestAsync = createAsyncThunk(
  'posts/fetchPosts',
  (newPage, {getState, dispatch}) => {
    let page = getState().posts.page;
    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
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

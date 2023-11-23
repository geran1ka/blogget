import axios from 'axios';
import {URL_API} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postRequestSuccessAfter = (data, count = 0) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
  countLoadAfter: count,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
  countLoadAfter: 0,
});

export const postRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  let countLoadAfter = getState().posts.countLoadAfter;
  console.log('countLoadAfter: ', countLoadAfter);
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  console.log('page: ', page);


  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;


  if (!token || loading || isLast) return;
  dispatch(postRequest());
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postRequestSuccessAfter(data.data, ++countLoadAfter));
      } else {
        dispatch(postRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(postRequestError(err.toString()));
    });
};

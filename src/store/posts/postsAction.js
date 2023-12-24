import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';

// export const POST_REQUEST = 'POST_REQUEST';
// export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
// export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
// export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
// export const CHANGE_PAGE = 'CHANGE_PAGE';

// export const postRequest = () => ({
//   type: POST_REQUEST,
// });

// export const postRequestSuccess = (data) => ({
//   type: POST_REQUEST_SUCCESS,
//   posts: data.children,
//   after: data.after,
// });

// export const postRequestSuccessAfter = (data, countLoadPage) => ({
//   type: POST_REQUEST_SUCCESS_AFTER,
//   posts: data.children,
//   after: data.after,
//   countLoadPage,
// });

// export const postRequestError = (error) => ({
//   type: POST_REQUEST_ERROR,
//   error,
// });

// export const changePage = (page) => ({
//   type: CHANGE_PAGE,
//   page,
//   countLoadPage: 0
// });

export const postRequestAsync = (newPage) => (dispatch, getState) => {
  console.log('newPage: ', newPage);

  console.log(getState().posts);
  let page = getState().posts.page;
  console.log('page: ', page);

  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage(page));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;
  // let countLoadPage = getState().posts.countLoadPage;

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

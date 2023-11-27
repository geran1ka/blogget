import axios from 'axios';
import {URL_API} from '../../api/const';
// import {commentsSlice} from './commentsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
export const COMMENTS_UPDATE = 'COMMENTS_UPDATE';

export const commentsUpdate = (comment) => ({
  type: COMMENTS_UPDATE,
  comment,
});

export const commentsRequestAsync2 = (id) => (dispatch, getState) => {

};

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;
    // dispatch(commentsSlice.actions.commentsRequest());
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((
          {
            data:
          [
            {
              data:
                {
                  children: [
                    {
                      data: post
                    }
                  ]
                }
            }, {
              data: {children}
            }
          ]
          }
      ) => {
        const comments = children.map(item => item.data);
        return {post, comments};
      },
      )
      .catch((error) => ({error}));
  }
);

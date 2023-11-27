import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;
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

import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  comment: 'Привет Rom',
  post: {},
  comments: [],
  status: '',
  error: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsRequest: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    commentsRequestSuccess: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    commentsRequestError: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
    commentsUpdate: (state, action) => {
      state.comment = action.comment;
    },
  },
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
    commentsUpdate: (state, action) => {
      state.comment = action.comment;
    },
  }
});

export default commentsSlice.reducer;

// export const commentsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case COMMENTS_REQUEST:
//       return {
//         ...state,
//         error: '',
//         comments: [],
//         status: 'loading',
//       };
//     case COMMENTS_REQUEST_SUCCESS:
//       return {
//         ...state,
//         post: action.post,
//         comments: action.comments,
//         error: '',
//         status: 'loaded',
//       };
//     case COMMENTS_UPDATE:
//       return {
//         ...state,
//         comment: action.comment,
//       };
//     case COMMENTS_REQUEST_ERROR:
//       return {
//         ...state,
//         error: action.error,
//         status: 'error',
//       };
//     default:
//       return state;
//   }
// };

import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postsAction';

const initialState = {
  posts: [],
  error: null,
  after: '',
  isLast: false,
  countLoadPage: 0,
  page: '',
  status: ''
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // changePage: (state, action) => {
    //   console.log(action);
    //   state.countLoadPage = 0;
    //   state.page = action.payload;
    //   state.posts = [];
    //   state.after = '';
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(postRequestAsync.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(postRequestAsync.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.children];
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
        state.countLoadPage += 1;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(postRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  }
});

export default postsSlice.reducer;

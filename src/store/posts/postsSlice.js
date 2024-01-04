import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync, searchRequestAsync} from './postsAction';

const initialState = {
  posts: [],
  error: null,
  after: '',
  isLast: false,
  countLoadPage: 0,
  page: '',
  status: '',
  search: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.countLoadPage = 0;
      state.page = action.payload;
      state.posts = [];
      state.after = '';
      state.search = '';
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postRequestAsync.pending, (state) => {
        state.error = '';
        state.status = 'loading';
        state.search = '';
      })
      .addCase(postRequestAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.posts = [...state.posts, ...action.payload.children];
          state.after = action.payload.after;
          state.isLast = !action.payload.after;
          state.countLoadPage += 1;
          state.error = '';
          state.status = 'loaded';
          state.search = '';
        }
      })
      .addCase(postRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      })
      .addCase(searchRequestAsync.pending, (state, action) => {
        console.log('action: ', action);
        state.loading = true;
        state.error = '';
      })
      .addCase(searchRequestAsync.fulfilled, (state, action) => {
        console.log('action: ', action);
        if (action.payload) {
          state.posts = action.payload.children;
          state.after = action.payload.after;
          state.isLast = !action.payload.after;
          state.countLoadPage += 1;
          state.error = '';
          state.status = 'loaded';
          state.search = action.meta.arg;
        }
      })
      .addCase(searchRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export default postsSlice.reducer;

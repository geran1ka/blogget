import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  error: null,
  afterPosts: '',
  afterSearch: '',
  search: '',
  isLast: false,
  countLoadPage: 0,
  page: '',
  status: ''
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.error = '';
      state.loading = true;
      state.status = 'loading';
    },
    postRequestSuccess: (state, action) => {
      if (state.afterPosts) {
        state.posts = [...state.posts, ...action.payload.children];
        state.countLoadPage += 1;
      } else {
        state.posts = action.payload.children;
      }
      state.afterPosts = action.payload.after;
      state.isLast = !action.payload.after;
      state.error = '';
      state.loading = false;
      state.status = 'loaded';
    },
    // postRequestSuccessAfter: (state, action) => {
    //   state.posts = [...state.posts, ...action.payload.children];
    //   state.afterPosts = action.payload.after;
    //   state.isLast = !action.payload.after;
    //   state.countLoadPage += 1;
    //   state.error = '';
    //   state.loading = false;
    //   state.status = 'loaded';
    // },
    postRequestError: (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.status = 'error';
    },
    searchRequest: (state, action) => {
      state.error = '';
      state.status = 'loading';
      if (action.payload) {
        state.search = action.payload;
      }
    },
    searchRequestSuccess: (state, action) => {
      if (action.payload) {
        if (state.afterSearch) {
          state.posts = [...state.posts, ...action.payload.children];
          // state.countLoadPage += 1;
        } else {
          state.posts = action.payload.children;
        }
        state.afterSearch = action.payload.after;
        state.isLast = !action.payload.after;
        state.error = '';
        state.status = 'loaded';
      }
    },
    searchRequestError: (state, action) => {
      state.error = action.error;
      state.status = 'error';
      state.search = '';
    },
    changePage: (state, action) => {
      state.countLoadPage = 0;
      state.page = action.payload;
      state.posts = [];
      state.afterPosts = '';
      state.afterSearch = '';
      state.isLast = false;
      state.search = '';
      console.log('changePage state.search', state.search);
    }
  },
});


export default postsSlice.reducer;

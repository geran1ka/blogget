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
      console.log(' state.search: ', state.search);
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
      console.log(' state.search: ', state.search);
    },
    postRequestError: (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.status = 'error';
    },
    searchRequest: (state, action) => {
      state.error = '';
      state.status = 'loading';

      if (action.payload) {
        console.log(action);
        state.search = action.payload;
        console.log(' state.search: ', state.search);
      }
      console.log(' state.search: ', state.search);
    },
    searchRequestSuccess: (state, action) => {
      console.log('action: ', action);
      if (action.payload) {
        if (state.afterSearch) {
          state.posts = [...state.posts, ...action.payload.children];
          // state.countLoadPage += 1;
        } else {
          state.posts = action.payload.children;
          state.countLoadPage = 0;
        }
        state.afterSearch = action.payload.after;
        state.isLast = !action.payload.after;
        state.error = '';
        state.status = 'loaded';
        console.log(' state.search: ', state.search);
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
      if (action.payload !== 'search') {
        state.search = '';
      }
      console.log(' state.search: ', state.search);
    }
  },
});


export default postsSlice.reducer;

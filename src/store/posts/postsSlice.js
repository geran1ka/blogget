import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  error: '',
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
    postRequest: (state) => {
      state.error = '';
      state.loading = true;
      state.status = 'loading';
    },
    postRequestSuccess: (state, action) => {
      state.posts = action.payload.children;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.error = '';
      state.loading = false;
      state.status = 'loaded';
    },
    postRequestSuccessAfter: (state, action) => {
      console.log('action: ', action);
      state.posts = [...state.posts, ...action.payload.children];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.countLoadPage += 1;
      state.error = '';
      state.loading = false;
      state.status = 'loaded';
    },
    postRequestError: (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.status = 'error';
    },
    changePage: (state, action) => {
      console.log(action);
      state.countLoadPage = 0;
      state.page = action.payload;
      state.posts = [];
    }
  },
});


export default postsSlice.reducer;

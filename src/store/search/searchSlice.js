import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: null,
  after: '',
  isLast: false,
  countLoadPage: 0,
  page: '',
  status: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    searchRequestSuccess: (state, action) => {
      if (action.payload) {
        state.posts = [...state.posts, ...action.payload.children];
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
        state.countLoadPage += 1;
        state.error = '';
        state.status = 'loaded';
      }
    },
    searchRequestError: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    }
  },
});

export default searchSlice.reducer;
